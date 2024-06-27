import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const getBaseUrl = () => {
    return import.meta.env.VITE_API_URL
}

const api: AxiosInstance = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
        request.headers['Content-Type'] = 'application/json'
        return request
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error: AxiosError) => {
        // const originalRequest = error.config
        if (error.response && error.response.status === 401) {
            return Promise.reject(error)
        }
        if (error.response && error.response.status !== 401) {
            return Promise.reject(error.response.data)
        }

        return Promise.reject(error)
    }
)

export default api