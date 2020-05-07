import { combineReducers } from 'redux';
import postReducer from './postReducer';
import generalReducer from './generalReducer';
import user from './userReducer';

export default combineReducers({
    posts: postReducer,
    generals: generalReducer,
    user: user
});