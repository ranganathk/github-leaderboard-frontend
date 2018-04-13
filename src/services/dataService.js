import axios from 'axios';
// const BACKEND_URL = 'https://87362fcb.ngrok.io/github/getAllStats?userToken=';
const BACKEND_URL = 'https://summer-sea-929.getsandbox.com/getAllStats';
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
    const url = BACKEND_URL;
    return await axios.get(url);
  };
}
