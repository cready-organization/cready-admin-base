import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()
const axiosClient = axios.create({
  headers: {
    'Content-Type': `application/json`,
  },
})

axiosClient.interceptors.request.use((config: any) => {
  config.headers['withCredentials'] = true
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data) {
      return response.data
    }

    return response
  },
  ({ response }) => {
    if (response.status === 403 || response.status === 401) {
      localStorage.clear()
      cookies.remove('username')
      cookies.remove('role')
      cookies.remove('accessToken')
    }
  }
)
export default axiosClient
