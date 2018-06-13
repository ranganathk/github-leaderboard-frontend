import axios from 'axios';
// const BACKEND_URL = 'https://87362fcb.ngrok.io/github/getAllStats?userToken=';
const BACKEND_URL =
  'https://ffa84gt8g5.execute-api.us-east-2.amazonaws.com/production/';
// const BACKEND_URL =
// 'http://github-leaderboard-backend-dev.ap-south-1.elasticbeanstalk.com/';
const GET_STATS_ENDPOINT = 'getAllGithubStats';
const SAVE_TOKEN_ENDPOINT = 'users/saveToken';

const TOKEN_NAME = 'githubAccessToken';

export default class DataService {
  static setLoggedIn = token => {
    return localStorage.setItem(TOKEN_NAME, token);
  };

  static isLoggedIn = () => {
    return localStorage.getItem(TOKEN_NAME);
  };

  static logout = () => {
    return localStorage.removeItem(TOKEN_NAME);
  };

  static getData = async timePeriod => {
    const token = DataService.isLoggedIn();
    const headers = { token };
    // const url = `${BACKEND_URL}/github/getAllStats`;
    const url =
      BACKEND_URL +
      GET_STATS_ENDPOINT +
      '?accessToken=' +
      token +
      '&timePeriod=' +
      timePeriod;
    return await axios.get(url);
  };

  static saveUserToken = async userToken => {
    const url = BACKEND_URL + SAVE_TOKEN_ENDPOINT;
    const accessToken = DataService.isLoggedIn();
    return await axios.post(url, {
      accessToken,
      userToken
    });
  };
}
