import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  return fetch(
    "https://605c94956d85de00170da8a7.mockapi.io/reactProject/products/" +
      (product.id || ""),
    {
      method: product.id ? "PUT" : "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    }
  )
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispact) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispact(updateProductSuccess(savedProduct))
          : dispact(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.log("Bir hata oluştu...");
  throw error;
}
export function getProducts(categoryId) {
  return function (dispatch) {
    let url =
      "https://605c94956d85de00170da8a7.mockapi.io/reactProject/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
