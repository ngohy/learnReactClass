import { combineReducers, createStore } from "redux";
import { numberReducer } from "./reducers/numberReducer";
import {imgCarReducer} from "./reducers/imgCarReducer";
import {commentReducer} from "./reducers/commentReducer";
import burgerReducer from "./reducers/burgerReducer";


const rootReducer = combineReducers({
    //noi chua cac state cua ung dung
    number: numberReducer,
    imgCar: imgCarReducer,
    commentReducer: commentReducer,
    burgerReducer:burgerReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())