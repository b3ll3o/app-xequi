import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3001',
  headers:{
    'Content-Type': 'application/json'
  },
  timeout: parseInt(process.env.API_TIMEOUT ? process.env.API_TIMEOUT : '2000')
})

export default api