import ActionTypes from '../constants/Action-types'

export const get_products = (products)=>{
    return {
        type: ActionTypes.GET_PRODUCTS,
        payload:products
    }
}


export const select_product = (product)=>{
    return {
        type:ActionTypes.SELECT_PRODUCT,
        payload:product
    }
}
export const remove_select_product = ()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}