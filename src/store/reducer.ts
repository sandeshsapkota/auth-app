import {combineReducers} from "redux";
import authReducer from "@/store/auth.slice";

const rootReducer = combineReducers({
        auth: authReducer.reducer
})

export default rootReducer
