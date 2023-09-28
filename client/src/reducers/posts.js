
import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';


const reducer = (posts = [], action) => {

    switch(action.type){

        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default: 
            return posts;
    }
}

export default reducer;



// NOTE:- state always to be equal to something
// we can also rename the state. in this we are remaining the state to posts