import axios from 'axios'
import Constants from 'expo-constants'

const baseAPI = axios.create({
  baseURL: Constants.manifest.extra.apiUrl
})

export default baseAPI