import axios from 'axios'
const baseUrl = '/api'

// const withHeaders = () => {
//   return {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//   }
// }

// ITEMS
export const getAllItems = () => {
  return axios.get(`${baseUrl}/items`)
}

// AUTH
export const registerUser = formData => {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}
export const loginUser = formData => {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}