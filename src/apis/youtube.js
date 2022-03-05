import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 3,
    key: 'AIzaSyC-hjFY2E5ZpS_fvgxZm5T4_cZ7oIQmqOE',
  },
});
