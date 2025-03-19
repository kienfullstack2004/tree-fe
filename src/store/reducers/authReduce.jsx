// import { action } from "../action";
import { actionType } from "../action/actionType";

const initState = {
  isLoggedIn: false,
  token: null,
  post:[]
};

const authReduce = (state = initState, action) => {
  switch (action.type) {
    case actionType.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        token: action?.token,
      };
    }
    case actionType.LOGIN_FAIL: {
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };
    }
    case actionType.POST_DATA_FAIL:
    case actionType.POST_DATA_SUCCESS:{
      return {
        ...state,
        post:action.post
      }
    }
    case actionType.LOGOUT:{
      return {
        ...state,
        isLoggedIn:false,
        token:null
      }
    }
    default: {
      return state;
    }
  }
};

export default authReduce; 
