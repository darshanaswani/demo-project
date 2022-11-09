import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

const middleWares = [thunk, logger];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleWares))
);

export default store;
