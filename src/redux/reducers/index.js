import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cardReducer from './cardReducer'
import savedProductReducer from './saveProductReducer'


const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cardReducer,
    savedProductReducer
})

export default rootReducer;