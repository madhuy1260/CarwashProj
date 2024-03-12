import axios from "axios";
import { getCategoryAction, getEachCategoryByIDAction } from "./Actions";
import * as Constants from "./Constants";

export const getCategoriesAPI = (info) => async (dispatch) => {
  dispatch(getCategoryAction(Constants.GET_CATEGORIES_START, {}, "", true));

  var data = {};

  var config = {
    method: "get",
    // url: process.env.REACT_APP_API_URL + "LoginStoreUser",
    url: "http://3.110.219.181:8080/api/v1/public/categories?pageNumber=0&pageSize=5&sortBy=categoryId&sortOrder=asc",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getCategoryAction(
          Constants.GET_CATEGORIES_SUCCESS,
          response.data,
          "Category Data loaded Successfully!!",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getCategoryAction(
              Constants.GET_CATEGORIES_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getCategoryAction(
              Constants.GET_CATEGORIES_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getCategoryAction(
              Constants.GET_CATEGORIES_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getEachCategoriesByIDAPI = (info) => async (dispatch) => {
  dispatch(
    getEachCategoryByIDAction(Constants.GET_EACH_CATEGORY_START, {}, "", true)
  );

  var data = {};

  var config = {
    method: "get",
    // url: process.env.REACT_APP_API_URL + "LoginStoreUser",
    url: "http://3.110.219.181:8080/api/v1/public/categories/2/products?pageNumber=0&pageSize=2&sortBy=productId&sortOrder=asc",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getEachCategoryByIDAction(
          Constants.GET_EACH_CATEGORY_SUCCESS,
          response.data,
          "Each Category Data loaded Successfully!!",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            getEachCategoryByIDAction(
              Constants.GET_EACH_CATEGORY_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            getEachCategoryByIDAction(
              Constants.GET_EACH_CATEGORY_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            getEachCategoryByIDAction(
              Constants.GET_EACH_CATEGORY_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};
