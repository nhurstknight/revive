import axios from 'axios'
const baseUrl = '/api'

const withHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

// ITEMS
export const getAllItems = () => {
  return axios.get(`${baseUrl}/items/`)
}
export const uploadItem = formData => {
  return axios.post(`${baseUrl}/items/`, formData, withHeaders())
}
export const getSingleItem = itemId => {
  return axios.get(`${baseUrl}/items/${itemId}/`)
}
export const sendMessage = (item, formData) => {
  return axios.post(`${baseUrl}/threads/`, formData, withHeaders())
}

// AUTH
export const registerUser = formData => {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}
export const loginUser = formData => {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

