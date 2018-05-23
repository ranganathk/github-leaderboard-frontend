import axios from 'axios';
// const BACKEND_URL = 'https://87362fcb.ngrok.io/github/getAllStats?userToken=';
const BACKEND_URL =
  'http://githubleaderboard-env.m64nbdmrrf.us-east-2.elasticbeanstalk.com/?userToken=';
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

  static getData = async () => {
    const token = DataService.isLoggedIn();
    const headers = { token };
    // const url = `${BACKEND_URL}/github/getAllStats`;
    const url = `${BACKEND_URL}${token}`;
    return await axios.get(url);
  };

  static sendOrganizationToken = async token => {
    const url = `${BACKEND_URL}/saveToken`;
    return await axios.post(url, {
      token
    });
  };
}
