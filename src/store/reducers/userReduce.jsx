import { actionType } from "../action/actionType";

const initState = {
    userData:{},
    search:[]
}


const userReduce = (state= initState,action) => {
    switch(action.type){
        case actionType.USER_DATA_SUCESS:{
            return {
                ...state,
                userData:action?.data
            }
        }
        case actionType.SEARCH_SUCESS: 
        case actionType.SEARCH_ERROR:{
            return {
                ...state,
                search:action?.search
            }
        } 
        case actionType.GET_USER_CURRNET_DATA_SUCCESS:
            case actionType.GET_USER_CURRNET_DATA_FAIL:{
                return {
                    ...state,
                    userData:action.userData
                }
            }

        default:{
            return state;
        }
    }
}

export default userReduce;
