import axios from 'axios';

const KEY = 'AIzaSyC-hjFY2E5ZpS_fvgxZm5T4_cZ7oIQmqOE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 3,
    key: KEY,
  },
});
