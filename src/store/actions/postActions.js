import { FETCH_POSTS, NEW_POST } from './types.js';

export function fetchPosts() {
    return function(dispatch) {
        fetch('/api/hello')
        .then(dat => dat.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
    }
}
export function createPost(postData) {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(postData)        
        })
        .then(dat => dat.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
    }
}