"use client"

import {useDispatch, useSelector} from "react-redux";
import Auth from "@/services/auth.service";
import {loginTypes, signupTypes} from "../../@types/auth";
import authSlice, {loginFailure, loginStart, loginSuccess, setUser, invalidToken} from "@/store/auth.slice";

const useAuth = () => {
    const dispatch = useDispatch()

    const {
       user, isLogin, token, authenticated, authenticating, error, signing, successMessage
    } = useSelector((state:any) => state.auth);

    const signup = (data:signupTypes) => Auth.signup(data);

    const login = async (credentials:loginTypes, router:any) => {
        dispatch(loginStart())
        try {
            const response:any = await Auth.login(credentials)
            if(response.data.ok) {
                dispatch(loginSuccess(response.data));
                router.push('/dashboard')
            }else {
                dispatch(loginFailure(response.data));
            }
        }catch (e:any) {
            dispatch(loginFailure(e));
        }
    }

    const logout= () => dispatch(authSlice.actions.logout())

    const fetchProfile = async () => {
        try {
            const response = await Auth.fetchProfile();
            if(response.ok) {
                dispatch(setUser(response))
            }else{
                dispatch(invalidToken())
            }
        }catch (e) {
            console.error('Error fetching profile data:', e);
        }
    }

    return {
        user,
        isLogin,
        token,
        authenticated,
        authenticating,
        error,
        signing,
        successMessage,
        fetchProfile,
        signup,
        login,
        logout
    }
}


export default useAuth
