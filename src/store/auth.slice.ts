import {createSlice} from "@reduxjs/toolkit";
import {clearToken, getToken, setToken} from "@/utils/token";

interface AuthTypes {
    token: any,
    authenticated: boolean,
    authenticating: boolean,
    signing: boolean,
    successMessage: string
    error: ""
    user: any
}

const initialState: AuthTypes = {
    token:  getToken() || "",
    authenticated: false,
    authenticating: false,
    signing: false,
    successMessage: "",
    error: "",
    user: undefined
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signupSuccess(state,action) {
            state.signing = false
            state.successMessage = action.payload.message
            state.error = ""
        },

        signupFail(state, action) {
            state.signing = false
            state.error = action?.payload?.message || "Something went wrong"
        },

        loginSuccess(state, action) {
            state.authenticated = true
            state.error = ""
            state.successMessage = action.payload.message
            state.token = action.payload.token
            setToken(action.payload.token)
        },

        loginFailure(state, action) {
            state.error = action?.payload?.message
            state.authenticating= false
            state.authenticated = false
        },

        loginStart(state) {
            state.authenticating= true
            state.authenticated = false;
            state.error = "";
        },

        logout(state) {
            state.authenticated = false
            state.token = ""
            clearToken()
        },

        setUser(state,action) {
            state.user = action.payload.profile
            state.authenticated = true;
        },

        invalidToken(state, ) {
            state.token = ""
            state.authenticating= false
            state.authenticated = false
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    invalidToken,
    logout,
    signupSuccess,
    signupFail,
    setUser
} = authSlice.actions;
export default authSlice
