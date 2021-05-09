import {combineReducers} from 'redux'
import {ProductReducer, selected_product} from './ProductReducer'

const reducers = combineReducers({
    allProducts:ProductReducer,
    product:selected_product
})


export default reducers