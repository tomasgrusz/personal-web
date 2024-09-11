"use server";

import axios from "axios";

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

const request = (query: string) => {
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers: {
        Authorization: `token ${process.env.GITHUB_PAT}`,
    },
    data: {
        query: query,
    }
  });
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

  if (res.data.errors) {
    return res.data.errors;
  }

  let repoNodes = res.data.data.user.repositories.nodes;
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