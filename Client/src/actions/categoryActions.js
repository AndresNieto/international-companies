import {
    SELECT_CATEGORY,
    ACTIVE_CATEGORY
} from '../types';

export function selectCategory(category) {
    return async (dispatch) => {
        dispatch( updateCategorySelected (category) )
    }
}

const updateCategorySelected = (category) => ({
    type: SELECT_CATEGORY,
    payload: category
})

export function activeCategory(categories) {
    return async (dispatch) => {
        dispatch( updateCategoryActive (categories) )
    }
}

const updateCategoryActive = (categories) => ({
    type: ACTIVE_CATEGORY,
    payload: categories
})
