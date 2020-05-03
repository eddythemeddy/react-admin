import { combineReducers } from 'redux';
import postReducer from './postReducer';
import generalReducer from './generalReducer';

export default combineReducers({
    posts: postReducer,
    generals: generalReducer
});