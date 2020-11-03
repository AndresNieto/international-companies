import {
    START_CONSULT_PRODUCT,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../types'

import clienteAxios from '../config/axios';

export function getProductsList(category) {
    return async (dispatch) => {

        dispatch( startConsultProducts () )

        try {
           const response = await clienteAxios.get(`/products/${category}`);
                      
           dispatch( consultProductsSuccess(response.data))
        } catch (error) {
            dispatch ( consultProductsError())
        }
    }
}

const startConsultProducts = () => ({
    type: START_CONSULT_PRODUCT,
    payload: true
})

const consultProductsSuccess = (productsList) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: productsList
})

const consultProductsError = (productsList) => ({
    type: GET_PRODUCTS_ERROR,
    payload: productsList
})