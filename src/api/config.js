import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL
})

axiosInstance.interceptors.request.use((config) => {
    console.log(config)
    return config
}, (error) => {
    console.log(error)
})

axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    console.log(error)
})