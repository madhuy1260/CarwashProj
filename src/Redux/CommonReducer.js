import INITIAL_STATE from "../public/INITIAL_STATE";

import { getCategoryReducer, getEachCategoryByIDReducer } from "./Reducers";

const reducers = {
  GET_CATEGORIES_START: getCategoryReducer,
  GET_CATEGORIES_SUCCESS: getCategoryReducer,
  GET_CATEGORIES_FAILURE: getCategoryReducer,

  GET_EACH_CATEGORY_START: getEachCategoryByIDReducer,
  GET_EACH_CATEGORY_SUCCESS: getEachCategoryByIDReducer,
  GET_EACH_CATEGORY_FAILURE: getEachCategoryByIDReducer,
};

export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
