"use server";

import 'server-only';

const topLanguagesQuery = `query userInfo() {
  user(login: "tomasgrusz") {
    # fetch only owner repos & not forks
    repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
      nodes {
        name
        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            size
            node {
              color
              name
            }
          }
        }
      }
    }
  }
}`;

const request = async (query: string) => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_PAT}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed with status ${response.status}`);
  }

  return response.json();
};

export type Language = {
    name: string;
    color: string;
    size: number;
    count: number;
    weight: number;
    percentage: number;
}

const fetchLanguages = async () => {
  console.log('Fetching languages');
  const res = await request(topLanguagesQuery);

  if (res.errors) {
    return res.errors;
  }

  let repoNodes = res.data.user.repositories.nodes;
  let repoCount = 0;

  repoNodes = repoNodes
    .filter((node: any) => node.languages.edges.length > 0)
    .reduce((acc: any, curr: any) => curr.languages.edges.concat(acc), [])
    .reduce((acc: any, prev: any) => {
      const prevLang = prev.node.name;
      let langSize = prev.size;

      if (acc[prevLang] && prevLang === acc[prevLang].name) {
        langSize = prev.size + acc[prevLang].size;
        repoCount += 1;
      } else {
        repoCount = 1;
      }
      return {
        ...acc,
        [prevLang]: {
          name: prevLang,
          color: prev.node.color,
          size: langSize,
          count: repoCount,
        },
      };
    }, {});

  const topLangs: Language[] = Object.keys(repoNodes).reduce((result: any, key) => {
    return ([...result, {...repoNodes[key]}])
  }, []).sort((a: any, b: any) => b.size - a.size);

  const maxSize = topLangs.reduce((acc, curr) => curr.size > acc ? curr.size : acc, 0);
  topLangs.forEach((lang) => lang.weight = Math.round((lang.size / maxSize) * 100));

  const totalSize = topLangs.reduce((acc, curr) => curr.size + acc, 0);
  topLangs.forEach((lang) => lang.percentage = (Math.round((lang.size / totalSize) * 10000)) / 100);

  return topLangs;
};

export default fetchLanguages;