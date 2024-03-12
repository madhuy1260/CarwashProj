import INITIAL_STATE from "../public/INITIAL_STATE";

import {
  loginReducer,
  OrderCount_by_pickupSlotsReducer,
  ActiveOrderReducer,
  UpdateOrderStatusReducer,
  UpdateOrderItemStatusReducer,
  GetOrderDetailsReducer,
  GetContactUsReducer,
  GetPOSOrderDetailsReducer,
  ChangePasswordStoreUserReducer,
  MatchedBasketsForEcommOrderReducer,
  AcceptWICOrderReducer,
  ProcessOrderReducer,
  AogGetDiscountCouponListReducer,
  getawsinfoReducer,
  GetBasketForTransactionReducer,
  GetProductPriceReducer,
  AddSubstitutionItemReducer,
  AOGGetProductsReducer,
  CancelSubstitutionItemReducer,
  AogReplaceUPCInOrderReducer,
  AddProductImageReducer,
  AogOrdercancelByPickerReducer,
  GetSearchOrderDetailsReducer,
  AddProductInOrderItemReducer,
  imageUploadReducer,
} from "./Reducers";

const reducers = {
  LOGIN_USER_START: loginReducer,
  LOGIN_USER_SUCCESS: loginReducer,
  LOGIN_USER_FAILURE: loginReducer,

  GETORDERCOUNTBY_PICKUPSLOTS_START: OrderCount_by_pickupSlotsReducer,
  GETORDERCOUNTBY_PICKUPSLOTS_SUCCESS: OrderCount_by_pickupSlotsReducer,
  GETORDERCOUNTBY_PICKUPSLOTS_FAILURE: OrderCount_by_pickupSlotsReducer,

  GETACTIVE_ORDER_START: ActiveOrderReducer,
  GETACTIVE_ORDER_SUCCESS: ActiveOrderReducer,
  GETACTIVE_ORDER_FAILURE: ActiveOrderReducer,

  UPDATE_ORDER_STATUS_START: UpdateOrderStatusReducer,
  UPDATE_ORDER_STATUS_SUCCESS: UpdateOrderStatusReducer,
  UPDATE_ORDER_STATUS_FAILURE: UpdateOrderStatusReducer,

  UPDATE_ORDER_ITEM_STATUS_START: UpdateOrderItemStatusReducer,
  UPDATE_ORDER_ITEM_STATUS_SUCCESS: UpdateOrderItemStatusReducer,
  UPDATE_ORDER_ITEM_STATUS_FAILURE: UpdateOrderItemStatusReducer,

  GET_ORDER_DETAILS_START: GetOrderDetailsReducer,
  GET_ORDER_DETAILS_SUCCESS: GetOrderDetailsReducer,
  GET_ORDER_DETAILS_FAILURE: GetOrderDetailsReducer,

  GET_CONTACT_US_START: GetContactUsReducer,
  GET_CONTACT_US_SUCCESS: GetContactUsReducer,
  GET_CONTACT_US_FAILURE: GetContactUsReducer,

  GET_POS_ORDER_DETAILS_START: GetPOSOrderDetailsReducer,
  GET_POS_ORDER_DETAILS_SUCCESS: GetPOSOrderDetailsReducer,
  GET_POS_ORDER_DETAILS_FAILURE: GetPOSOrderDetailsReducer,

  CHANGE_PASSWORD_STORE_USER_START: ChangePasswordStoreUserReducer,
  CHANGE_PASSWORD_STORE_USER_SUCCESS: ChangePasswordStoreUserReducer,
  CHANGE_PASSWORD_STORE_USER_FAILURE: ChangePasswordStoreUserReducer,

  GET_MATCHED_BASKETS_FOR_ECOMM_ORDER_START: MatchedBasketsForEcommOrderReducer,
  GET_MATCHED_BASKETS_FOR_ECOMM_ORDER_SUCCESS:
    MatchedBasketsForEcommOrderReducer,
  GET_MATCHED_BASKETS_FOR_ECOMM_ORDER_FAILURE:
    MatchedBasketsForEcommOrderReducer,

  ACCEPT_WIC_ORDER_START: AcceptWICOrderReducer,
  ACCEPT_WIC_ORDER_SUCCESS: AcceptWICOrderReducer,
  ACCEPT_WIC_ORDER_FAILURE: AcceptWICOrderReducer,

  PROCESS_ORDER_START: ProcessOrderReducer,
  PROCESS_ORDER_SUCCESS: ProcessOrderReducer,
  PROCESS_ORDER_FAILURE: ProcessOrderReducer,

  GET_DISCOUNT_COUPONS_LIST_START: AogGetDiscountCouponListReducer,
  GET_DISCOUNT_COUPONS_LIST_SUCCESS: AogGetDiscountCouponListReducer,
  GET_DISCOUNT_COUPONS_LIST_FAILURE: AogGetDiscountCouponListReducer,

  // RSA - API

  GET_AWS_INFO_START: getawsinfoReducer,
  GET_AWS_INFO_SUCCESS: getawsinfoReducer,
  GET_AWS_INFO_FAILURE: getawsinfoReducer,

  GET_BASKET_DATA_START: GetBasketForTransactionReducer,
  GET_BASKET_DATA_SUCCESS: GetBasketForTransactionReducer,
  GET_BASKET_DATA_FAILURE: GetBasketForTransactionReducer,

  GET_PRODUCT_PRICE_START: GetProductPriceReducer,
  GET_PRODUCT_PRICE_SUCCESS: GetProductPriceReducer,
  GET_PRODUCT_PRICE_FAILURE: GetProductPriceReducer,

  AOG_GET_PRODUCTS_START: AOGGetProductsReducer,
  AOG_GET_PRODUCTS_SUCCESS: AOGGetProductsReducer,
  AOG_GET_PRODUCTS_FAILURE: AOGGetProductsReducer,

  ADD_SUBSTITUTION_ITEM_START: AddSubstitutionItemReducer,
  ADD_SUBSTITUTION_ITEM_SUCCESS: AddSubstitutionItemReducer,
  ADD_SUBSTITUTION_ITEM_FAILURE: AddSubstitutionItemReducer,

  CANCEL_SUBSTITUTION_ITEM_START: CancelSubstitutionItemReducer,
  CANCEL_SUBSTITUTION_ITEM_SUCCESS: CancelSubstitutionItemReducer,
  CANCEL_SUBSTITUTION_ITEM_FAILURE: CancelSubstitutionItemReducer,

  AOG_REPLACE_UPC_INORDER_START: AogReplaceUPCInOrderReducer,
  AOG_REPLACE_UPC_INORDER_SUCCESS: AogReplaceUPCInOrderReducer,
  AOG_REPLACE_UPC_INORDER_FAILURE: AogReplaceUPCInOrderReducer,

  ADD_PRODUCT_IMAGE_START: AddProductImageReducer,
  ADD_PRODUCT_IMAGE_SUCCESS: AddProductImageReducer,
  ADD_PRODUCT_IMAGE_FAILURE: AddProductImageReducer,

  AOG_ORDER_CANCEL_BY_PICKER_START: AogOrdercancelByPickerReducer,
  AOG_ORDER_CANCEL_BY_PICKER_SUCCESS: AogOrdercancelByPickerReducer,
  AOG_ORDER_CANCEL_BY_PICKER_FAILURE: AogOrdercancelByPickerReducer,

  SEARCH_ORDER_DETAILS_START: GetSearchOrderDetailsReducer,
  SEARCH_ORDER_DETAILS_SUCCESS: GetSearchOrderDetailsReducer,
  SEARCH_ORDER_DETAILS_FAILURE: GetSearchOrderDetailsReducer,

  ADD_PRODUCT_IN_ORDER_ITEM_START: AddProductInOrderItemReducer,
  ADD_PRODUCT_IN_ORDER_ITEM_SUCCESS: AddProductInOrderItemReducer,
  ADD_PRODUCT_IN_ORDER_ITEM_FAILURE: AddProductInOrderItemReducer,

  IMAGE_UPLOAD_START: imageUploadReducer,
  IMAGE_UPLOAD_SUCCESS: imageUploadReducer,
  IMAGE_UPLOAD_FAILURE: imageUploadReducer,
};

export const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const reducer = reducers[type];
  return reducer ? reducer(state, payload) : state;
};
