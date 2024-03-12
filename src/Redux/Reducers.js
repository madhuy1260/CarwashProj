export const loginReducer = (state, payload) => {
  return {
    ...state,
    loginData: payload && payload.data && payload.data,
    loginMsg: payload && payload.message && payload.message,
    loginLoading: payload && payload.loading && payload.loading,
  };
};

export const OrderCount_by_pickupSlotsReducer = (state, payload) => {
  return {
    ...state,
    OrderCount_by_pickupSlotsData: payload && payload.data && payload.data,
    OrderCount_by_pickupSlotsMsg: payload && payload.message && payload.message,
    OrderCount_by_pickupSlotsLoading:
      payload && payload.loading && payload.loading,
  };
};

export const ActiveOrderReducer = (state, payload) => {
  return {
    ...state,
    ActiveOrderData: payload && payload.data && payload.data,
    ActiveOrderMsg: payload && payload.message && payload.message,
    ActiveOrderLoading: payload && payload.loading && payload.loading,
  };
};

export const UpdateOrderStatusReducer = (state, payload) => {
  return {
    ...state,
    UpdateOrderStatusData: payload && payload.data && payload.data,
    UpdateOrderStatusMsg: payload && payload.message && payload.message,
    UpdateOrderStatusLoading: payload && payload.loading && payload.loading,
  };
};

export const UpdateOrderItemStatusReducer = (state, payload) => {
  return {
    ...state,
    UpdateOrderItemStatusData: payload && payload.data && payload.data,
    UpdateOrderItemStatusMsg: payload && payload.message && payload.message,
    UpdateOrderItemStatusLoading: payload && payload.loading && payload.loading,
  };
};

export const GetOrderDetailsReducer = (state, payload) => {
  return {
    ...state,
    GetOrderDetailsData: payload && payload.data && payload.data,
    GetOrderDetailsMsg: payload && payload.message && payload.message,
    GetOrderDetailsLoading: payload && payload.loading && payload.loading,
  };
};

export const GetContactUsReducer = (state, payload) => {
  return {
    ...state,
    GetContactUsData: payload && payload.data && payload.data,
    GetContactUsMsg: payload && payload.message && payload.message,
    GetContactUsLoading: payload && payload.loading && payload.loading,
  };
};

export const GetPOSOrderDetailsReducer = (state, payload) => {
  return {
    ...state,
    GetPOSorderDetailsData: payload && payload.data && payload.data,
    GetPOSorderDetailsMsg: payload && payload.message && payload.message,
    GetPOSorderDetailsLoading: payload && payload.loading && payload.loading,
  };
};

export const ChangePasswordStoreUserReducer = (state, payload) => {
  return {
    ...state,
    ChangePasswordStoreUserData: payload && payload.data && payload.data,
    ChangePasswordStoreUserMsg: payload && payload.message && payload.message,
    ChangePasswordStoreUserLoading:
      payload && payload.loading && payload.loading,
  };
};

export const MatchedBasketsForEcommOrderReducer = (state, payload) => {
  return {
    ...state,
    MatchedBasketsForEcommOrderData: payload && payload.data && payload.data,
    MatchedBasketsForEcommOrderMsg:
      payload && payload.message && payload.message,
    MatchedBasketsForEcommOrderLoading:
      payload && payload.loading && payload.loading,
  };
};

export const AcceptWICOrderReducer = (state, payload) => {
  return {
    ...state,
    AcceptWICOrderData: payload && payload.data && payload.data,
    AcceptWICOrderMsg: payload && payload.message && payload.message,
    AcceptWICOrderLoading: payload && payload.loading && payload.loading,
  };
};

export const ProcessOrderReducer = (state, payload) => {
  return {
    ...state,
    ProcessOrderData: payload && payload.data && payload.data,
    ProcessOrderMsg: payload && payload.message && payload.message,
    ProcessOrderLoading: payload && payload.loading && payload.loading,
  };
};

export const AogGetDiscountCouponListReducer = (state, payload) => {
  return {
    ...state,
    AogGetDiscountCouponListData: payload && payload.data && payload.data,
    AogGetDiscountCouponListMsg: payload && payload.message && payload.message,
    AogGetDiscountCouponListLoading:
      payload && payload.loading && payload.loading,
  };
};

// RSA - API
export const getawsinfoReducer = (state, payload) => {
  return {
    ...state,
    getawsinfoData: payload && payload.data && payload.data,
    getawsinfoMsg: payload && payload.message && payload.message,
    getawsinfoLoading: payload && payload.loading && payload.loading,
  };
};

export const GetBasketForTransactionReducer = (state, payload) => {
  return {
    ...state,
    GetBasketForTransactionData: payload && payload.data && payload.data,
    GetBasketForTransactionMsg: payload && payload.message && payload.message,
    GetBasketForTransactionLoading:
      payload && payload.loading && payload.loading,
  };
};

export const GetProductPriceReducer = (state, payload) => {
  return {
    ...state,
    GetProductPriceData: payload && payload.data && payload.data,
    GetProductPriceMsg: payload && payload.message && payload.message,
    GetProductPriceLoading: payload && payload.loading && payload.loading,
  };
};

export const AOGGetProductsReducer = (state, payload) => {
  return {
    ...state,
    AOGGetProductsData: payload && payload.data && payload.data,
    AOGGetProductsMsg: payload && payload.message && payload.message,
    AOGGetProductsLoading: payload && payload.loading && payload.loading,
  };
};

export const AddSubstitutionItemReducer = (state, payload) => {
  return {
    ...state,
    AddSubstitutionItemData: payload && payload.data && payload.data,
    AddSubstitutionItemMsg: payload && payload.message && payload.message,
    AddSubstitutionItemLoading: payload && payload.loading && payload.loading,
  };
};

export const CancelSubstitutionItemReducer = (state, payload) => {
  return {
    ...state,
    CancelSubstitutionItemData: payload && payload.data && payload.data,
    CancelSubstitutionItemMsg: payload && payload.message && payload.message,
    CancelSubstitutionItemLoading:
      payload && payload.loading && payload.loading,
  };
};

export const AogReplaceUPCInOrderReducer = (state, payload) => {
  return {
    ...state,
    AogReplaceUPCInOrderData: payload && payload.data && payload.data,
    AogReplaceUPCInOrderMsg: payload && payload.message && payload.message,
    AogReplaceUPCInOrderLoading: payload && payload.loading && payload.loading,
  };
};

export const AddProductImageReducer = (state, payload) => {
  return {
    ...state,
    AddProductImageData: payload && payload.data && payload.data,
    AddProductImageMsg: payload && payload.message && payload.message,
    AddProductImageLoading: payload && payload.loading && payload.loading,
  };
};

export const AogOrdercancelByPickerReducer = (state, payload) => {
  return {
    ...state,
    AogOrdercancelByPickerData: payload && payload.data && payload.data,
    AogOrdercancelByPickerMsg: payload && payload.message && payload.message,
    AogOrdercancelByPickerLoading:
      payload && payload.loading && payload.loading,
  };
};

export const GetSearchOrderDetailsReducer = (state, payload) => {
  return {
    ...state,
    GetSearchOrderDetailsData: payload && payload.data && payload.data,
    GetSearchOrderDetailsMsg: payload && payload.message && payload.message,
    GetSearchOrderDetailsLoading: payload && payload.loading && payload.loading,
  };
};

export const AddProductInOrderItemReducer = (state, payload) => {
  return {
    ...state,
    AddProductInOrderItemData: payload && payload.data && payload.data,
    AddProductInOrderItemMsg: payload && payload.message && payload.message,
    AddProductInOrderItemLoading: payload && payload.loading && payload.loading,
  };
};

export const imageUploadReducer = (state, payload) => {
  return {
    ...state,
    imageUploadItemData: payload && payload.data && payload.data,
    imageUploadItemMsg: payload && payload.message && payload.message,
    imageUploadItemLoading: payload && payload.loading && payload.loading,
  };
};
