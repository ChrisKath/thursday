import axios, { AxiosInstance } from 'axios'
import { configs } from '@/constants'
import { cookie } from '@/utils/storage'

/**
 * Create axios instance.
 */
const Axios: AxiosInstance = axios.create({
  baseURL: `${configs.API_GATEWAY}/todo`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE'
  }
})

/**
 * Axios also provides a request interceptor, allows changes to the request data before it is sent to the server
 * This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
 * The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
 * FormData or Stream
 * You may modify the headers object.
 */
Axios.interceptors.request.use((reqConfig) => {
  if (reqConfig.headers) {
    const ACCESS_TOKEN = cookie.get(configs.APP_AUTH_ACCESS)
    if (ACCESS_TOKEN) {
      reqConfig.headers[configs.AUTH_ACCESS] = `Bearer ${ACCESS_TOKEN}`
    }
  }

  return reqConfig
})

export default Axios
export const { CancelToken } = axios
