import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const getBaseUrl = () => {
    return import.meta.env.API_URL
}

const instance: AxiosInstance = axios.create({
    baseURL: getBaseUrl()
})

instance.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
        request.headers['Content-Type'] = 'application/json'
        return request
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error: AxiosError) => {
        // const originalRequest = error.config
        if (error.response?.status === 401) {
            return Promise.reject(error)
        }

        return Promise.reject(error)
    }
)
