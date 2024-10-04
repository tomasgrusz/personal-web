"use server";

import 'server-only';

import axios from "axios";

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

const fetchContributions = async () => {
  console.log('Fetching contributions');
  const contributions = await request(contributionQuery);
  return contributions.data;
};

export default fetchContributions;