import { apiGetCurrentUser, apiSearch } from "../../Service/apiUser";
import { actionType } from "./actionType";

export const searchData = (payload) => async(dispatch) => {
    try {
        const responsive = await apiSearch(payload);
        if(responsive?.data?.err == 0){
            dispatch({
                type:actionType.SEARCH_SUCESS,
                search:responsive?.data?.data
            })
        }else
        {
            dispatch({
                type:actionType.SEARCH_ERROR,
                search:responsive?.data?.data
            })
        }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        dispatch({
            type:actionType.SEARCH_SUCESS,
            search:[]
        })
    }
}

export const getOneUserCurrent = () => async(dispatch) => {
   try {
 
    const responsive = await apiGetCurrentUser();
    console.log(responsive?.data?.user)
    if(responsive?.data?.err === 0)
    {
        dispatch({
            type:actionType.GET_USER_CURRNET_DATA_SUCCESS,
            userData:responsive?.data?.user
        })
    }else
    {
       dispatch({
        type:actionType.GET_USER_CURRNET_DATA_FIAL,
        userData:responsive?.data?.user
       })
    }
// eslint-disable-next-line no-unused-vars
} catch (error) {
    dispatch({
        type:actionType.GET_USER_CURRNET_DATA_FIAL,
        userData:{}
    })
   } 
}