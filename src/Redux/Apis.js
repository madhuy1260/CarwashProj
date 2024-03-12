import axios from "axios";
import {
  loginAction,
  OrderCount_by_pickupSlotsAction,
  activeOrderAction,
  UpdateOrderStatusAction,
  UpdateOrderItemStatusAction,
  GetOrderDetailsAction,
  GetContactUsAction,
  GetPOSorderDetailsAction,
  ChangePasswordStoreUserAction,
  MatchedBasketsForEcommOrderAction,
  AcceptWICOrderAction,
  ProcessOrderAction,
  AogGetDiscountCouponListAction,
  getawsinfoAction,
  GetBasketForTransactionAction,
  GetProductPriceAction,
  AOGGetProductsAction,
  AddSubstitutionItemAction,
  CancelSubstitutionItemAction,
  AogReplaceUPCInOrderAction,
  AddProductImageAction,
  AogOrderCancelByPickerAction,
  GetSearchOrderDetailsAction,
  AddProductInOrderItemAction,
  imageUploadAction,
} from "./Actions";
import * as Constants from "./Constants";

const LoginInfo = JSON.parse(
  localStorage.getItem("LoginINFO") && localStorage.getItem("LoginINFO")
);
const userToken = localStorage.getItem("UserToken");

export const getLogin = (info) => async (dispatch) => {
  dispatch(loginAction(Constants.LOGIN_USER_START, {}, "", true));

  var data = {};
  data.username = info?.username;
  data.password = info?.password;

  var config = {
    method: "post",
    url: process.env.REACT_APP_API_URL + "LoginStoreUser",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        loginAction(
          Constants.LOGIN_USER_SUCCESS,
          response.data,
          "Login Successfully!!",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            loginAction(
              Constants.LOGIN_USER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            loginAction(
              Constants.LOGIN_USER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else
          dispatch(
            loginAction(
              Constants.LOGIN_USER_FAILURE,
              {},
              "Internal server error.",
              false
            )
          );
      }
    });
};

export const getOrderCount_by_pickupSlots = (info) => async (dispatch) => {
  dispatch(
    OrderCount_by_pickupSlotsAction(
      Constants.GETORDERCOUNTBY_PICKUPSLOTS_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    clientStoreId: LoginInfo?.ClientStoreId,
    device_type: "web-app",
    is_mealkit: "0",
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    shipping_date: info?.date,
    store_id: LoginInfo?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "post",
    url: API_END_POINT + "/GetOrderCountByPickupSlots",
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  await axios(config)
    .then((response) => {
      dispatch(
        OrderCount_by_pickupSlotsAction(
          Constants.GETORDERCOUNTBY_PICKUPSLOTS_SUCCESS,
          response.data,
          "Data Loaded successfully",
          false
        )
      );
      if (info?.day === "today") {
        info?.setDashData((prev) => {
          return {
            ...prev,
            today: response.data.data ? response.data.data : "",
          };
        });
      } else if (info?.day === "tmrw") {
        info?.setDashData((prev) => {
          return {
            ...prev,
            tmrw: response.data.data ? response.data.data : "",
          };
        });
      } else {
        info?.setDashData((prev) => {
          return {
            ...prev,
            selectedDate: response.data.data ? response.data.data : "",
          };
        });
      }
    })
    .catch((err) => {
      if (err) {
        if (err.response && err.response.status === 404) {
          dispatch(
            OrderCount_by_pickupSlotsAction(
              Constants.GETORDERCOUNTBY_PICKUPSLOTS_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else if (err.response && err.response.status === 400) {
          dispatch(
            OrderCount_by_pickupSlotsAction(
              Constants.GETORDERCOUNTBY_PICKUPSLOTS_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            OrderCount_by_pickupSlotsAction(
              Constants.GETORDERCOUNTBY_PICKUPSLOTS_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const getActiveOrder = (info) => async (dispatch) => {
  dispatch(activeOrderAction(Constants.GETACTIVE_ORDER_START, {}, "", true));
  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    app_username: info?.username,
    appname: "pickerapp",
    clientStoreId: info?.ClientStoreId,
    device_type: "web-app",
    is_mealkit: "0",
    page_no: "1",
    picker_id: info?.id,
    rsa_client_id: info?.RSAClientId,
    search_text: info?.SearchString,
    shipping_time: info?.shippingTime ? info?.shippingTime : "",
    shipping_date: info?.shippingDate ? info?.shippingDate : "",
    status: info?.status,
    store_id: info?.store_id,
    token: userToken,
    version: "1.0.31",
    from_page: info?.from_page,
  };

  var config = {
    method: "post",
    url: API_END_POINT + "/GetActiveOrder",
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  await axios(config)
    .then((response) => {
      dispatch(
        activeOrderAction(
          Constants.GETACTIVE_ORDER_SUCCESS,
          response.data,
          "Data Loaded Successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            activeOrderAction(
              Constants.GETACTIVE_ORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            activeOrderAction(
              Constants.GETACTIVE_ORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            activeOrderAction(
              Constants.GETACTIVE_ORDER_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const getUpdateOrderStatus = (info) => async (dispatch) => {
  dispatch(
    UpdateOrderStatusAction(Constants.UPDATE_ORDER_STATUS_START, {}, "", true)
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    action: info?.action,
    app_username: info?.username,
    mealkit_picker_user_id: info?.mealkitPickerUserId,
    appname: "pickerapp",
    device_type: "web-app",
    member_number: info?.memberNumber,
    new_status_id: info?.newStatusId,
    order_id: info?.orderId,
    picker_id: info?.pickerId,
    pickup_person: info?.pickerPerson,
    rsa_client_id: info?.RSAClientId,
    store_id: info?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/UpdateOrderStatus",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        UpdateOrderStatusAction(
          Constants.UPDATE_ORDER_STATUS_SUCCESS,
          response.data,
          "Data Loaded Successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            UpdateOrderStatusAction(
              Constants.UPDATE_ORDER_STATUS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            UpdateOrderStatusAction(
              Constants.UPDATE_ORDER_STATUS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            UpdateOrderStatusAction(
              Constants.UPDATE_ORDER_STATUS_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const getUpdateOrderItemStatus = (info) => async (dispatch) => {
  dispatch(
    UpdateOrderItemStatusAction(
      Constants.UPDATE_ORDER_ITEM_STATUS_START,
      {},
      "",
      true
    )
  );
  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    aisle_number: info?.aisleNumber,
    api_row_total: info?.apiRowTotal,
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    category_ids: info?.categoryIds,
    device_type: "web-app",
    item_status: info?.status,
    mealkit_picker_user_id: "583",
    member_number: info?.memberNumber,
    order_id: info?.orderId,
    order_item_id: info?.orderItemId,
    picker_id: LoginInfo?.id,
    picker_notes: info?.pickerNotes,
    qty: info?.qty,
    row_total: info?.rowTotal,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    unit_price: info?.unitPrice,
    version: "1.0.31",
    weight: info?.weight,
    cancel_notes: info?.cancelNotes,
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/UpdateOrderItemStatus",
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  await axios(config)
    .then((response) => {
      dispatch(
        UpdateOrderItemStatusAction(
          Constants.UPDATE_ORDER_ITEM_STATUS_SUCCESS,
          response.data,
          "Data Updated Successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            UpdateOrderItemStatusAction(
              Constants.UPDATE_ORDER_ITEM_STATUS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            UpdateOrderItemStatusAction(
              Constants.UPDATE_ORDER_ITEM_STATUS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            UpdateOrderItemStatusAction(
              Constants.UPDATE_ORDER_ITEM_STATUS_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const GetOrderDetailsAPI = (info) => async (dispatch) => {
  dispatch(
    GetOrderDetailsAction(Constants.GET_ORDER_DETAILS_START, {}, "", true)
  );
  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    device_type: "web-app",
    is_mealkit: "0",
    member_number: info?.memberNumber,
    order_id: info?.orderId,
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    sort_by: info?.sortBy,
    store_id: LoginInfo?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/GetOrderDetails",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        GetOrderDetailsAction(
          Constants.GET_ORDER_DETAILS_SUCCESS,
          response.data,
          "Data loaded Successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            GetOrderDetailsAction(
              Constants.GET_ORDER_DETAILS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            GetOrderDetailsAction(
              Constants.GET_ORDER_DETAILS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            GetOrderDetailsAction(
              Constants.GET_ORDER_DETAILS_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const GetContactUsAPI = (info) => async (dispatch) => {
  dispatch(GetContactUsAction(Constants.GET_CONTACT_US_START, {}, "", true));

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var config = {
    method: "POST",
    url: "https://aogapi.grocerypundit.com/api/GetContactUs",
    headers: { "Content-Type": "application/json" },
  };

  await axios(config)
    .then((response) => {
      dispatch(
        GetContactUsAction(
          Constants.GET_CONTACT_US_SUCCESS,
          response.data,
          "Data Loaded Successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            GetContactUsAction(
              Constants.GET_CONTACT_US_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            GetContactUsAction(
              Constants.GET_CONTACT_US_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            GetContactUsAction(
              Constants.GET_CONTACT_US_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const GetPOSorderDetailsAPI = (info) => async (dispatch) => {
  dispatch(
    GetPOSorderDetailsAction(
      Constants.GET_POS_ORDER_DETAILS_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    app_username: info?.username,
    appname: "pickerapp",
    device_type: "web-app",
    is_mealkit: "0",
    member_number: info?.memberNumber,
    order_id: info?.orderId,
    picker_id: info?.id,
    rsa_client_id: info?.RSAClientId,
    sort_by: info?.sortBy,
    store_id: info?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/GetPOSOrderDetails",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        GetPOSorderDetailsAction(
          Constants.GET_POS_ORDER_DETAILS_SUCCESS,
          response.data,
          "Data Loaded Successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            GetPOSorderDetailsAction(
              Constants.GET_POS_ORDER_DETAILS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            GetPOSorderDetailsAction(
              Constants.GET_POS_ORDER_DETAILS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            GetPOSorderDetailsAction(
              Constants.GET_POS_ORDER_DETAILS_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const ChangePasswordStoreUserAPI = (info) => async (dispatch) => {
  dispatch(
    ChangePasswordStoreUserAction(
      Constants.CHANGE_PASSWORD_STORE_USER_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    app_username: info?.username,
    appname: "pickerapp",
    clientStoreId: info?.ClientStoreId,
    device_type: "web-app",
    newPassword: info?.newPassword,
    oldPassword: info?.oldPassword,
    picker_id: info?.id,
    rsa_client_id: info?.RSAClientId,
    storeUserId: info?.id,
    store_id: info?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/ChangePasswordStoreUser",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        ChangePasswordStoreUserAction(
          Constants.CHANGE_PASSWORD_STORE_USER_SUCCESS,
          response.data,
          "Password Changed Successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            ChangePasswordStoreUserAction(
              Constants.CHANGE_PASSWORD_STORE_USER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            ChangePasswordStoreUserAction(
              Constants.CHANGE_PASSWORD_STORE_USER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            ChangePasswordStoreUserAction(
              Constants.CHANGE_PASSWORD_STORE_USER_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const MatchedBasketsForEcommOrderAPI = (info) => async (dispatch) => {
  dispatch(
    MatchedBasketsForEcommOrderAction(
      Constants.GET_MATCHED_BASKETS_FOR_ECOMM_ORDER_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    EcomCartId: "0",
    EnterpriseId: LoginInfo?.EnterpriseId,
    MemberNumber: info?.memberNumber,
    OrderNumber: info?.orderId,
    RSAClientId: LoginInfo?.RSAClientId,
    SecurityKey: LoginInfo?.SecurityKey,
    StoreId: LoginInfo?.store_id,
    UserToken: userToken,
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    device_type: "web-app",
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/GetMatchedBasketsForEcomorder",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        MatchedBasketsForEcommOrderAction(
          Constants.GET_MATCHED_BASKETS_FOR_ECOMM_ORDER_SUCCESS,
          response.data,
          "Data loaded successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            MatchedBasketsForEcommOrderAction(
              Constants.GET_MATCHED_BASKETS_FOR_ECOMM_ORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            MatchedBasketsForEcommOrderAction(
              Constants.GET_MATCHED_BASKETS_FOR_ECOMM_ORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            MatchedBasketsForEcommOrderAction(
              Constants.GET_MATCHED_BASKETS_FOR_ECOMM_ORDER_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const AcceptWICOrderAPI = (info) => async (dispatch) => {
  dispatch(
    AcceptWICOrderAction(Constants.ACCEPT_WIC_ORDER_START, {}, "", true)
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    POSBasketID: "0",
    POSStoreNumber: LoginInfo?.POSStoreId,
    POSTransactionNumber: "",
    api_cost_plus_fees_amount: LoginInfo?.cost_plus_fees_per,
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    basket_data_id: "0",
    cartId: "0",
    clientStoreId: LoginInfo?.ClientStoreId,
    consumerIds: {
      alternateId: "",
      emailAddress: "keyur@weenggs.com",
      membernumber: "44925638716",
      mobileNumber: "4444444444",
    },
    coupons: [],
    device_type: "web-app",
    ecomOrderId: "24496",
    from: "@ReshmaDAndroid - LoggedUser:Test_picker",
    internal_notes: "",
    items: [
      {
        amount: "2.94",
        coPrefix: "",
        deptId: "",
        familyCode1: "",
        familyCode2: "",
        id: "4011",
        idType: "UPC",
        item_price: "0.98",
        picker_notes: "",
        qty: "3",
        qtyType: "U",
        row_total: "2.94",
        saleType: "S",
        substitutedforupc: "",
        weight: "7.50",
      },
      {
        amount: "7.49",
        coPrefix: "",
        deptId: "",
        familyCode1: "",
        familyCode2: "",
        id: "1313006025",
        idType: "UPC",
        item_price: "7.49",
        picker_notes: "",
        qty: "1",
        qtyType: "U",
        row_total: "7.49",
        saleType: "S",
        substitutedforupc: "",
        weight: "0.00",
      },
      {
        amount: "784.47",
        coPrefix: "",
        deptId: "",
        familyCode1: "",
        familyCode2: "",
        id: "4065",
        idType: "UPC",
        item_price: "0.79",
        picker_notes: "",
        qty: "993",
        qtyType: "U",
        row_total: "784.47",
        saleType: "S",
        substitutedforupc: "",
        weight: "1.00",
      },
    ],
    labelImageUrl: "",
    member_number: "44925638716",
    operatorId: "0",
    picker_id: LoginInfo?.id,
    posId: "9005",
    posLaneNumber: "",
    receiptImageUrl: "",
    retailer: "Buche Foods - Gregory",
    rsa_client_id: LoginInfo?.RSAClientId,
    storeId: LoginInfo?.store_id,
    storeNotes: "",
    store_id: LoginInfo?.store_id,
    subtotalAmount: "794.90",
    token: userToken,
    totalDiscountAmount: "0.00",
    transactionDate: "2023-05-08",
    transactionGrandTotal: "794.90",
    transactionId: "24496",
    transactionTaxAmount: "0.00",
    transactionTenderType: ["Cash"],
    transactionTime: "05:00 PM - 06:00 PM",
    transactionTotalAmount: "794.90",
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AcceptWICOrder",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        AcceptWICOrderAction(
          Constants.ACCEPT_WIC_ORDER_SUCCESS,
          response.data,
          "Data loaded successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            AcceptWICOrderAction(
              Constants.ACCEPT_WIC_ORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            AcceptWICOrderAction(
              Constants.ACCEPT_WIC_ORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            AcceptWICOrderAction(
              Constants.ACCEPT_WIC_ORDER_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const ProcessOrderAPI = (info) => async (dispatch) => {
  dispatch(ProcessOrderAction(Constants.PROCESS_ORDER_START, {}, "", true));
  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    POSBasketID: info?.POSBasketID,
    POSStoreNumber: info?.POSStoreNumber,
    POSTransactionDate: "",
    POSTransactionNumber: info?.POSTransactionNumber,
    api_cost_plus_fees_amount: info?.api_cost_plus_fees_amount,
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    basket_data_id: info?.basket_data_id,
    cartId: info?.cartId,
    clientStoreId: LoginInfo?.ClientStoreId,
    consumerIds: {
      alternateId: "",
      emailAddress: info?.emailAddress,
      membernumber: info?.member_number,
      mobileNumber: info?.mobileNumber,
    },
    coupons: info?.coupons,
    device_type: "web-app",
    ecomOrderId: info?.ecomOrderId,
    from: info?.from,
    internal_notes: info?.internal_notes,
    items: info?.items,
    labelImageUrl: "",
    member_number: info?.member_number,
    operatorId: "0",
    picker_id: LoginInfo?.id,
    posId: info?.posId,
    posLaneNumber: info?.posLaneNumber,
    receiptImageUrl: info?.receiptImageUrl,
    retailer: info?.retailer,
    rsa_client_id: LoginInfo?.RSAClientId,
    storeId: LoginInfo?.store_id,
    storeNotes: info?.storeNotes,
    store_id: LoginInfo?.store_id,
    subtotalAmount: info?.subtotalAmount,
    token: userToken,
    totalDiscountAmount: info?.totalDiscountAmount,
    transactionDate: info?.transactionDate,
    transactionGrandTotal: info?.transactionGrandTotal,
    transactionId: info?.transactionId,
    transactionTaxAmount: info?.transactionTaxAmount,
    transactionTenderType: [info?.transactionTenderType],
    transactionTime: info?.transactionTime,
    transactionTotalAmount: info?.transactionTotalAmount,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AogProcessOrder",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        ProcessOrderAction(
          Constants.PROCESS_ORDER_SUCCESS,
          response.data,
          "Processed the order successfully",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            ProcessOrderAction(
              Constants.PROCESS_ORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            ProcessOrderAction(
              Constants.PROCESS_ORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            ProcessOrderAction(
              Constants.PROCESS_ORDER_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const AogGetDiscountCouponListAPI = (info) => async (dispatch) => {
  dispatch(
    AogGetDiscountCouponListAction(
      Constants.GET_DISCOUNT_COUPONS_LIST_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    appname: "pickerapp",
    clientStoreId: LoginInfo?.ClientStoreId,
    device_type: "web-app",
    member_number: "429725753643",
    order_id: info?.orderId,
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AogGetDiscountCouponList",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        AogGetDiscountCouponListAction(
          Constants.GET_DISCOUNT_COUPONS_LIST_SUCCESS,
          response.data,
          "Coupons data loaded successfully.",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            AogGetDiscountCouponListAction(
              Constants.GET_DISCOUNT_COUPONS_LIST_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            AogGetDiscountCouponListAction(
              Constants.GET_DISCOUNT_COUPONS_LIST_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            AogGetDiscountCouponListAction(
              Constants.GET_DISCOUNT_COUPONS_LIST_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

// RSA - API
export const getawsinfoAPI = (info) => async (dispatch) => {
  dispatch(getawsinfoAction(Constants.GET_AWS_INFO_START, {}, "", true));

  var data = {
    EnterpriseId: LoginInfo?.EnterpriseId,
    RSAClientId: LoginInfo?.RSAClientId,
    SecurityKey: LoginInfo?.SecurityKey,
    UserToken: userToken,
    app_username: LoginInfo?.username,
    picker_id: LoginInfo?.id,
  };

  var config = {
    method: "POST",
    url: "https://ra14ql4rs6.execute-api.us-east-1.amazonaws.com/prod/v2/aogecommerceapi.svc/getawsinfo",
    headers: { "Content-Type": "application/json", domainname: "ecomapi" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        getawsinfoAction(
          Constants.GET_AWS_INFO_SUCCESS,
          response.data,
          "Success",
          false
        )
      );
    })
    .catch((err) => {
      if (err) {
        if (err.response && err.response.status === 404) {
          dispatch(
            getawsinfoAction(
              Constants.GET_AWS_INFO_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else if (err.response && err.response.status === 400) {
          dispatch(
            getawsinfoAction(
              Constants.GET_AWS_INFO_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            getawsinfoAction(
              Constants.GET_AWS_INFO_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const GetBasketForTransactionActionAPI = (info) => async (dispatch) => {
  dispatch(
    GetBasketForTransactionAction(Constants.GET_BASKET_DATA_START, {}, "", true)
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    EcomOrderNumber: info?.ecomOrderNumber,
    EnterpriseId: info?.enterpriseId,
    LaneNumber: info?.laneNumber,
    MemberNumber: info?.memberNumber,
    RSAClientId: info?.RSAClientId,
    SecurityKey: info?.SecurityKey,
    StoreNumber: info?.storeNumber,
    TransactionDate: info?.transactionDate,
    TransactionNumber: info?.transactionNum,
    app_username: info?.app_username,
    appname: "pickerapp",
    device_type: "web-app",
    picker_id: info?.picker_id,
    rsa_client_id: info?.RSAClientId,
    store_id: info?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/GetBasketForTransaction",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        GetBasketForTransactionAction(
          Constants.GET_BASKET_DATA_SUCCESS,
          response.data,
          "Success",
          false
        )
      );
    })
    .catch((err) => {
      if (err) {
        if (err.response && err.response.status === 404) {
          dispatch(
            GetBasketForTransactionAction(
              Constants.GET_BASKET_DATA_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else if (err.response && err.response.status === 400) {
          dispatch(
            GetBasketForTransactionAction(
              Constants.GET_BASKET_DATA_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            GetBasketForTransactionAction(
              Constants.GET_BASKET_DATA_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const GetProductPriceAPI = (info) => async (dispatch) => {
  dispatch(
    GetProductPriceAction(Constants.GET_PRODUCT_PRICE_START, {}, "", true)
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    device_type: "web-app",
    member_number: "429725753643",
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    upc: info?.upc,
    version: "1.0.32",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AogGetProductPrice",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        GetProductPriceAction(
          Constants.GET_PRODUCT_PRICE_SUCCESS,
          response.data,
          "success",
          false
        )
      );
    })
    .catch((err) => {
      if (err) {
        if (err.response && err.response.status === 404) {
          dispatch(
            GetProductPriceAction(
              Constants.GET_PRODUCT_PRICE_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else if (err.response && err.response.status === 404) {
          dispatch(
            GetProductPriceAction(
              Constants.GET_PRODUCT_PRICE_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            GetProductPriceAction(
              Constants.GET_PRODUCT_PRICE_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const AOGGetProductsAPI = (info) => async (dispatch) => {
  dispatch(
    AOGGetProductsAction(Constants.AOG_GET_PRODUCTS_START, {}, "", true)
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    aog_search_keyword: info?.searchKey,
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    category_ids: info?.categoryIds,
    clientStoreId: LoginInfo?.ClientStoreId,
    device_type: "web-app",
    fromApp: "picker",
    is_send_wic_item: "1",
    member_number: "44513120753",
    page_no: "1",
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    subcate_ids: "",
    token: userToken,
    version: "1.0.32",
    wic_category_id: info?.wicCategoryId,
    wic_sub_category_id: info?.wicSubCategoryId,
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AogGetProducts",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        AOGGetProductsAction(
          Constants.AOG_GET_PRODUCTS_SUCCESS,
          response.data,
          "Success",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            AOGGetProductsAction(
              Constants.AOG_GET_PRODUCTS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            AOGGetProductsAction(
              Constants.AOG_GET_PRODUCTS_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            AOGGetProductsAction(
              Constants.AOG_GET_PRODUCTS_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const AddSubstitutionItemAPI = (info) => async (dispatch) => {
  dispatch(
    AddSubstitutionItemAction(
      Constants.ADD_SUBSTITUTION_ITEM_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    amount: info?.amount,
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    calc_type: info?.calcType,
    device_type: "web-app",
    member_number: "44513120753",
    order_id: info?.orderId,
    order_item_id: info?.orderItemId,
    picker_id: LoginInfo?.id,
    picker_notes: info?.picker_notes,
    qty: info?.qty,
    row_total: info?.amount,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    upc: info?.upc,
    version: "1.0.32",
    wic_category_id: info?.wicCategoryId,
    wic_sub_category_id: info?.wicSubCategoryId,
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AddSubstitutionItem",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        AddSubstitutionItemAction(
          Constants.ADD_SUBSTITUTION_ITEM_SUCCESS,
          response.data,
          "success",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            AddSubstitutionItemAction(
              Constants.ADD_SUBSTITUTION_ITEM_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            AddSubstitutionItemAction(
              Constants.ADD_SUBSTITUTION_ITEM_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            AddSubstitutionItemAction(
              Constants.ADD_SUBSTITUTION_ITEM_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const CancelSubstitutionItemAPI = (info) => async (dispatch) => {
  dispatch(
    CancelSubstitutionItemAction(
      Constants.CANCEL_SUBSTITUTION_ITEM_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    device_type: "web-app",
    member_number: info?.memberNumber,
    order_id: info?.orderId,
    order_item_id: info?.orderItemId,
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/CancelSubstitutionItem",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        CancelSubstitutionItemAction(
          Constants.CANCEL_SUBSTITUTION_ITEM_SUCCESS,
          response.data,
          "success",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            CancelSubstitutionItemAction(
              Constants.CANCEL_SUBSTITUTION_ITEM_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            CancelSubstitutionItemAction(
              Constants.CANCEL_SUBSTITUTION_ITEM_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            CancelSubstitutionItemAction(
              Constants.CANCEL_SUBSTITUTION_ITEM_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const AogReplaceUPCInOrderAPI = (info) => async (dispatch) => {
  dispatch(
    AogReplaceUPCInOrderAction(
      Constants.AOG_REPLACE_UPC_INORDER_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    device_type: "web-app",
    order_id: info?.orderId,
    order_item_id: info?.orderItemId,
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    upc: info?.upc,
    version: "1.0.32",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AogReplaceUPCInOrder",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        AogReplaceUPCInOrderAction(
          Constants.AOG_REPLACE_UPC_INORDER_SUCCESS,
          response.data,
          "success",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            AogReplaceUPCInOrderAction(
              Constants.AOG_REPLACE_UPC_INORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            AogReplaceUPCInOrderAction(
              Constants.AOG_REPLACE_UPC_INORDER_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            AogReplaceUPCInOrderAction(
              Constants.AOG_REPLACE_UPC_INORDER_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const AddProductImageAPI = (info) => async (dispatch) => {
  dispatch(
    AddProductImageAction(Constants.ADD_PRODUCT_IMAGE_START, {}, "", true)
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    MainProductImage: info?.MainProductImage,
    BarcodeImage: info?.BarcodeImage,
    ProductUPC: info?.upc,
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    device_type: "web-app",
    picker_id: LoginInfo?.id,
    product_id: info?.productId,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    version: "1.0.32",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AddProductImage",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        AddProductImageAction(
          Constants.ADD_PRODUCT_IMAGE_SUCCESS,
          response.data,
          "success",
          false
        )
      );
      window.location.reload();
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            AddProductImageAction(
              Constants.ADD_PRODUCT_IMAGE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            AddProductImageAction(
              Constants.ADD_PRODUCT_IMAGE_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            AddProductImageAction(
              Constants.ADD_PRODUCT_IMAGE_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const AogOrderCancelByPickerAPI = (info) => async (dispatch) => {
  dispatch(
    AogOrderCancelByPickerAction(
      Constants.AOG_ORDER_CANCEL_BY_PICKER_START,
      {},
      "",
      true
    )
  );
  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    appname: "pickerapp",
    cancel_notes: info?.cancelNotes,
    device_type: "web-app",
    member_number: info?.memberNumber,
    order_id: info?.orderId,
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    version: "1.0.32",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AogOrderCancelByPicker",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        AogOrderCancelByPickerAction(
          Constants.AOG_ORDER_CANCEL_BY_PICKER_SUCCESS,
          response.data,
          "Order Cancelled Successfully",
          false
        )
      );
    })
    .catch((err) => {
      if (err) {
        if (err.response && err.response.status === 404) {
          dispatch(
            AogOrderCancelByPickerAction(
              Constants.AOG_ORDER_CANCEL_BY_PICKER_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else if (err.response && err.response.status === 400) {
          dispatch(
            AogOrderCancelByPickerAction(
              Constants.AOG_ORDER_CANCEL_BY_PICKER_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            AogOrderCancelByPickerAction(
              Constants.AOG_ORDER_CANCEL_BY_PICKER_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const GetSearchOrderDetailsAPI = (info) => async (dispatch) => {
  dispatch(
    GetSearchOrderDetailsAction(
      Constants.SEARCH_ORDER_DETAILS_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    MemberNumber: info?.memberNumber,
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    clientStoreId: LoginInfo?.ClientStoreId,
    device_type: "web-app",
    is_mealkit: "0",
    order_number: info?.orderNumber,
    page_no: "1",
    phone_number: info?.phoneNumber,
    comments: info?.comments,
    picker_id: LoginInfo?.id,
    rsa_client_id: LoginInfo?.RSAClientId,
    status: "1,2,3",
    store_id: LoginInfo?.store_id,
    token: userToken,
    version: "1.0.31",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/GetSearchOrderDetails",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        GetSearchOrderDetailsAction(
          Constants.SEARCH_ORDER_DETAILS_SUCCESS,
          response.data,
          "Data Loaded successfully",
          false
        )
      );
    })
    .catch((err) => {
      if (err) {
        if (err.response && err.response.status === 404) {
          dispatch(
            GetSearchOrderDetailsAction(
              Constants.SEARCH_ORDER_DETAILS_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else if (err.response && err.response.status === 400) {
          dispatch(
            GetSearchOrderDetailsAction(
              Constants.SEARCH_ORDER_DETAILS_FAILURE,
              {},
              err.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            GetSearchOrderDetailsAction(
              Constants.SEARCH_ORDER_DETAILS_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const AddProductInOrderItemAPI = (info) => async (dispatch) => {
  dispatch(
    AddProductInOrderItemAction(
      Constants.ADD_PRODUCT_IN_ORDER_ITEM_START,
      {},
      "",
      true
    )
  );

  const API_END_POINT = LoginInfo?.ApiEndPointAOG;

  var data = {
    amount: info?.amount,
    app_username: LoginInfo?.username,
    appname: "pickerapp",
    calc_type: info?.calcType, //which CalcType - adding item ?
    device_type: "web-app",
    member_number: info?.memberNumber,
    order_id: info?.orderId,
    picker_id: LoginInfo?.id,
    picker_notes: info?.picker_notes,
    qty: info?.qty,
    row_total: info?.rowTotal,
    rsa_client_id: LoginInfo?.RSAClientId,
    store_id: LoginInfo?.store_id,
    token: userToken,
    upc: info?.upc,
    version: "1.0.32",
  };

  var config = {
    method: "POST",
    url: API_END_POINT + "/AddProductInOrderItem",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        AddProductInOrderItemAction(
          Constants.ADD_PRODUCT_IN_ORDER_ITEM_SUCCESS,
          response.data,
          "Success",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            AddProductInOrderItemAction(
              Constants.ADD_PRODUCT_IN_ORDER_ITEM_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            AddProductInOrderItemAction(
              Constants.ADD_PRODUCT_IN_ORDER_ITEM_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            AddProductInOrderItemAction(
              Constants.ADD_PRODUCT_IN_ORDER_ITEM_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};

export const imageUploadAPI = (info) => async (dispatch) => {
  dispatch(imageUploadAction(Constants.IMAGE_UPLOAD_START, {}, "", true));

  const API_END_POINT =
    "https://ra14ql4rs6.execute-api.us-east-1.amazonaws.com/prod/picker-upload-image";

  var data = {
    path: info.path,
    file: info.file,
  };

  var config = {
    method: "POST",
    url: API_END_POINT,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  await axios(config)
    .then((response) => {
      dispatch(
        imageUploadAction(
          Constants.IMAGE_UPLOAD_SUCCESS,
          response.data,
          "success",
          false
        )
      );
    })
    .catch((error) => {
      if (error) {
        if (error.response && error.response.status === 404) {
          dispatch(
            imageUploadAction(
              Constants.IMAGE_UPLOAD_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else if (error.response && error.response.status === 400) {
          dispatch(
            imageUploadAction(
              Constants.IMAGE_UPLOAD_FAILURE,
              {},
              error.response.data.message,
              false
            )
          );
        } else {
          dispatch(
            imageUploadAction(
              Constants.IMAGE_UPLOAD_FAILURE,
              {},
              "Internal Server Error",
              false
            )
          );
        }
      }
    });
};
