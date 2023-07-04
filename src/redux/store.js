import { createStore , applyMiddleware , combineReducers } from "redux" ;
import apiReducer  from "./reducer/apiReducer"
import thunk from "redux-thunk";
import saveDataReducer from "./reducer/saveDataReducer"

const rootReducer = combineReducers({
    data : apiReducer,
    saveData : saveDataReducer
});

const store = createStore(rootReducer , applyMiddleware(thunk));

export default store;