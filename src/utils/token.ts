"use client"
export const getToken = () => {
    if (typeof localStorage !== "undefined") {
       return localStorage.getItem("TOKEN_KEY")
    }
}

export const setToken = (token: string) => {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("TOKEN_KEY", token)
    }
};

export const clearToken = () => {
    if (typeof localStorage !== "undefined") {
        localStorage.removeItem("TOKEN_KEY")
    }
};
