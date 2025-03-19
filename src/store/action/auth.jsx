import { actionType } from "./actionType";
import {apiLoginService} from "../../Service/apiAuth";


export const login = (payload) => async(dispatch) => {
    try {
       const responsive = await apiLoginService(payload); 
    if(responsive?.data?.err === 0){
        dispatch({
            type:actionType.LOGIN_SUCCESS,
            token: responsive?.data?.access_token
        })
    }else
    {
        dispatch({
            type:actionType.LOGIN_FAIL,
            token:responsive?.data?.access_token
        })
    }        
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        dispatch({
            type:actionType.LOGIN_FAIL,
            token:null
        })
    }
}


export const logout = () => (dispatch) => {
    dispatch({
        type:actionType.LOGOUT,
    })
}

