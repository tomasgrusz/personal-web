"use server";

import 'server-only';

const contributionQuery = `query() { 
  user(login: "tomasgrusz"){
    contributionsCollection {
      restrictedContributionsCount
      joinedGitHubContribution {
        occurredAt
      }
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
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

const fetchContributions = async () => {
  console.log('Fetching contributions');
  return request(contributionQuery);
};

export default fetchContributions;