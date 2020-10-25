import axios from 'axios'
const baseUrl = '/api'

export const getAllItems = () => {
  return axios.get(`${baseUrl}/items`)
}