import {combineReducers} from 'redux';
import posts from './posts';


export default combineReducers({
    // posts: posts  because the both the key and values are same,
    // so that's why we can write this.
    posts,
})