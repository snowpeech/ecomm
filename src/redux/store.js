import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//set up middleware. The store we're expecting is an array
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
