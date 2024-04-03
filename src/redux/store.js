// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers"
import authenticateReducer from './reducers/authenticateReducer';
import productReducer from "./reducers/productSlice";

import { configureStore } from '@reduxjs/toolkit';
// import { configure } from "@testing-library/react";

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({
  reducer: {
    auth: authenticateReducer, 
    product: productReducer,
  }
});

export default store;