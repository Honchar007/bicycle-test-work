import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  },
});

export default http;