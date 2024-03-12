export const getCategoryAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading,
    },
  };
};

export const getEachCategoryByIDAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading,
    },
  };
};
