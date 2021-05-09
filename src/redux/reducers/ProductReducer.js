import ActionType from '../constants/Action-types'


const initialState = {
    products:[ ]
}

export const ProductReducer = (state = initialState, {type, payload})=>{
switch(type){
    case ActionType.GET_PRODUCTS:
        return {...state, products:payload};
    
    default:
        return state;
}
}


export const selected_product = (state={},{type,payload})=>{
    switch(type){
        case ActionType.SELECT_PRODUCT:
            return {...state, ...payload};

        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }

}