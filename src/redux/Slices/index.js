import {combineReducers} from "redux";
import authenticateReducer from "./authenticateSlice";
import productReducer from "./productSlice";


export default combineReducers({
  auth:authenticateReducer,
  product:productReducer,
})