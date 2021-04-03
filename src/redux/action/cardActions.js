import * as actionTypes from './actionTypes'

export function addToCart(cardItem){
    return {type: actionTypes.ADD_TO_CART, payload: cardItem}
}

export function removeFromCart(product){
    return {type: actionTypes.REMOVE_FROM_CART, payload: product}
}