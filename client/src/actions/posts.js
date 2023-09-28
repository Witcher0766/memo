import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api';



// Actino creators

// below  we use redux thunk for fetching the data (dispatch) function
export const getPosts = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }    
}
// const action = {type: 'FETCH_ALL', payload: []}
// // payload usually a data, where we store all our posts
// // return action;

// dispatch(action);
// (instead of using this we can use above rule)
// with redux-thunk


export const createPost = (post) => async (dispatch) => {

    try {
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}


export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };


  export const deletePost = (id) => async (dispatch) => {

    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id});
    }
    catch(error) {
        console.log(error);
    }
  }


export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
  
        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
};





// without redux thunk (BEFORE)

// const getPosts = () => {
//     const action = {type: 'FETCH_ALL', payload: []}
// }

