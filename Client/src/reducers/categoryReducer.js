import {
    SELECT_CATEGORY,
    ACTIVE_CATEGORY
} from '../types'

const initialState = {
    categoriesList: [
        { id: 0, name : 'All', active: false },
        { id: 1, name : 'Tech', active: false },
        { id: 2, name : 'Services', active: false },
        { id: 3, name : 'Office', active: false }
    ],
    categorySelected: 'All'
}

export default function(state = initialState, action) {
    switch(action.type) {

        case SELECT_CATEGORY:
            return {
                ...state,
                categorySelected: action.payload
            }
        case ACTIVE_CATEGORY:
            return {
                ...state,
                categoriesList: action.payload
            }
        default: 
            return state
        
    }
}