"use client";

import axios, { AxiosInstance } from "axios";
import {getToken} from "@/utils/token";

const http = () => {
    const axiosConfig:any = {
        baseURL: process.env.NEXT_PUBLIC_APP_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const instance: AxiosInstance = axios.create(axiosConfig);

    instance.interceptors.request.use((config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    instance.interceptors.response.use(
        (response) => {
            // If the response contains a "body" property, extract the data from it
            if (response.data && response.data.body) {
                response.data = JSON.parse(response.data.body);
            }
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return instance;
};

export default http;
