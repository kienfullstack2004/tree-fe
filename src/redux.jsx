import rootReducer from "./store/reducers/rootReduce";
import persistStore from "redux-persist/es/persistStore";
import {thunk} from "redux-thunk";
import { createStore } from "redux";
import { applyMiddleware } from "redux";

const reduxStore = () => {
    const store = createStore(rootReducer,applyMiddleware(thunk));
    const persistor = persistStore(store);
    return {store,persistor} 
}

export default reduxStore;