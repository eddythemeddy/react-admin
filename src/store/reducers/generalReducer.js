import { TOGGLE_MENU } from '../actions/types.js';

const initialState = {
    mobileMenu: false
}

//evaluates what type we are dealing with
export default function(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                mobileMenu: action.payload
            }
        default:
            return state; 
    }
}