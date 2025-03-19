import { actionType } from "./actionType";
import {  apiGetAllPost } from "../../Service/apiPost";

export const postall = () => async(dispatch) => {
    try {
    const responsive = await apiGetAllPost();
        if(responsive?.data?.err === 0)
        {
            dispatch({
                type:actionType.POST_DATA_SUCCESS,
                post:responsive?.data?.data 
            })
        }else
        {
            dispatch({
                type:actionType.POST_DATA_FAIL,
                post:responsive?.data?.data 
            })
        }

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        dispatch({
            type:actionType.POST_DATA_FAIL,
            post:[]
        })
    }
}
