import { TOGGLE_MENU } from './types.js';

export function toggleMenu(data) {
    return function(dispatch) {
        dispatch({
            type: TOGGLE_MENU,
            payload: data
        })
    }
}