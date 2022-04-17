import axios from "axios";

const host = `https://api.github.com`;

export const searchRepos = params => {
  return axios.get(`${host}/search/repositories`, {
    params,
    headers: {
      "Accept": "application/vnd.github.v3+json"
    }
  });
}
