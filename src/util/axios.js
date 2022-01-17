import axios from 'axios';

cont DOMAIN = "http://localhost:80";

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