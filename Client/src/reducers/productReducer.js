import {
    START_CONSULT_PRODUCT,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../types'

const initialState = {
    productsList: [],
    totalProducts: 0,
    error: false,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {

        case START_CONSULT_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsList: action.payload.productlist,
                totalProducts: action.payload.totalProducts,
                loading: false
            }
        
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: false
            }

        default:
            return state;
    }
}