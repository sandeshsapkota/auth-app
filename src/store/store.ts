import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "@/store/reducer";

const store = configureStore({
    reducer:rootReducer
})

export default store
