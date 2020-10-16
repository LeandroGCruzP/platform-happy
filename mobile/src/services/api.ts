import axios from 'axios'

const api = axios.create({
  // Para hacer funcionar en tu dispositivo fisico con expo
  baseURL: 'http://192.168.43.195:3333',
})

export default api;
