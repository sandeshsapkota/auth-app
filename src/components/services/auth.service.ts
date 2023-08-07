import http from "@/utils/http";
import {loginTypes, signupTypes} from "../../../@types/auth";

class AuthService {
    /**
     * SIGN UP - METHOD
     * */
    async fetchProfile() {
        try {
            const response = await http().get("api/profile")
            return response.data

        } catch (e: any) {
            return e.response.data;
            console.log(e)
        }
    }

    /**
     * SIGN UP - METHOD
     * @param credentials
     * */
    async signup(credentials: signupTypes) {
        try {
            const response = await http().post("api/register", JSON.stringify(credentials))
            return response.data
        } catch (e: any) {
            return e.response.data;
            console.log(e)
        }
    }

    /**
     * LOGIN METHOD
     * @param credentials
     * */
    async login(credentials: loginTypes) {
        try {
           return await http().post("api/login", JSON.stringify(credentials))
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * LOGOUT METHOD
     * */
    async logout(): Promise<void> {
        try {
            await http().post("api/logout")
        } catch (e) {
            console.log(e)
        }
    }
}

export default new AuthService();
