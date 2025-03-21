import authReduce from "./authReduce";
import userReduce from "./userReduce";
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const authConfig = {
   ...commonConfig,
   key:'auth',
   whitelist:["isLoggedIn","token"] 
}

const rootReducer = combineReducers({
    auth:persistReducer(authConfig,authReduce),
    user:userReduce
})

export default rootReducer;