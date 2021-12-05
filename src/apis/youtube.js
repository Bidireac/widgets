import axios from 'axios';

const KEY = process.env.REACT_APP_GOOGLE_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 3,
    key: KEY,
  },
});
