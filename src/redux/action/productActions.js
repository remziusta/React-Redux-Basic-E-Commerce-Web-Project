import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products){
    return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: products}
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url =
      "https://605c94956d85de00170da8a7.mockapi.io/reactProject/products";
    if(categoryId){
      url = url + "?categoryId="+categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
