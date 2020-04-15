import axios from 'axios';

const vimeoApi = axios.create({
  baseURL: 'https://api.vimeo.com'
});

vimeoApi.defaults.headers.common['Authorization'] = 'bearer ' + process.env.VIMEO_TOKEN;

export const fetchVideo = (id: string) => {
  return new Promise((resolve, reject) => {
    vimeoApi.get(`/videos/${id}`)
    .then(response => {
      resolve({
        video_id: id,
        video_title: response.data.name,
        video_duration: response.data.duration,
        video_date: response.data.created_time,
        video_preview: response.data.pictures.sizes[3].link,
      })
    })
    .catch(error => {
      reject(error)
    });
  });
}