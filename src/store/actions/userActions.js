import { SET_USER_DATA, CLEAR_STORE } from './types.js';
import axios from 'axios'

const setUserData = user => ({
    type: SET_USER_DATA,
    payload: user,
})

export const clearStore = () => ({ type: CLEAR_STORE })

export const checkLoginStatus = () => {
    return dispatch => {
        return axios.get('/login/check').then(res => {
            const { logged } = res.data
            if (logged) {
                dispatch(getUserData())
            }
        })
    }
}

export const getUserData = () => {
    return dispatch => {
        axios.get('/api/profile').then(res => {
            dispatch(setUserData(res.data.data))
        })
    }
}