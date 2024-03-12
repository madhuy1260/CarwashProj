import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { commonReducer } from "./CommonReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import INITIAL_STATE from "../public/INITIAL_STATE";

const logger = createLogger();

const store = createStore(
  commonReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
