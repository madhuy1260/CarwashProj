export const getCategoryReducer = (state, payload) => {
  return {
    ...state,
    getCategoryData: payload && payload.data && payload.data,
    getCategoryMsg: payload && payload.message && payload.message,
    getCategoryLoading: payload && payload.loading && payload.loading,
  };
};

export const getEachCategoryByIDReducer = (state, payload) => {
  return {
    ...state,
    getEachCategoryByIDData: payload && payload.data && payload.data,
    getEachCategoryByIDMsg: payload && payload.message && payload.message,
    getEachCategoryByIDLoading: payload && payload.loading && payload.loading,
  };
};
