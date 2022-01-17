import axios from 'axios';

const DOMAIN = "http://192.249.18.169:443";

axios.defaults.withCredentials = true;

export const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    })
      .then((res) => res.data)
      .catch((err) => console.log(err));
}