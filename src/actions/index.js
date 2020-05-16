import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT, 
    FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './actionTypes'
import firebase from 'firebase/app'
import fbconfig from '../config/fbConfig'
import { getFirestore } from 'redux-firestore'
import { findAllByAltText } from '@testing-library/react'

let nextTodoId = 0

// sync action creators
const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
})

const fetchTodosSuccess = (payload) => ({
    type: FETCH_TODOS_SUCCESS,
    payload // todo list data
})

const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
})

// invoke an async action
export const fetchTodos = () => {
    return (dispatch) => { // return a function, need a middleware(redux-thunk)
        dispatch(fetchTodosRequest());
        return fetch('.\\mock\\initial_todos.json').then( // This is how to access file in public
            response => {
                response.json().then(data => {
                    dispatch(fetchTodosSuccess(data));
                })
            },
            error => {
                dispatch(fetchTodosFailure(error));
                console.log("Tell Wendy an error occurred in fetchTodos(): \n"+ error);
            }
        )
    }
}

// fetchTodo from firestore
// export const fetchTodosFirebase = (state) => {
//     return (dispatch, { getFirebase }) => {
//         const firebase = getFirebase();
//         let queryAll = firebase.collection('todos');
//         dispatch(fetchTodosRequest());
//         return fetch('https://todo-backend-4142d.firebaseio.com')
//             // .then()
//             .then((response) => {
//                 let v = response.json();
//                 v.then(data => {
//                     dispatch(fetchTodosSuccess(data));
//                 })
//                 },
//                 error => {
//                     dispatch(fetchTodosFailure(error));
//                     console.log("Tell Wendy error occurred in fetchTodosFirebase(): \n" + error);
//                 }
//             )
//     }
// }

// fetchTodo from firestore
// export const fetchTodosFirebase = (state) => {
//     return (dispatch, { getFirebase }) => {
//         const firebase = getFirebase();
//         let ref = firebase.collection('todos').doc('todo');
//         let queryAll = ref.get()
//             .then( snapshot => {
//                 snapshot.forEach(doc => {
//                     if (!doc.exists) {
//                         console.log("No such document!");
//                     } else {
//                         dispatch(fetchTodosRequest);
//                         dispatch(fetchTodosSuccess(doc));
//                         dispatch(addTodo(doc));
//                         console.log("DISPATCH succeed: fetchTodosSuccess");
//                     }
//                 })
//             })
//             .catch(error => {
//                 dispatch(fetchTodosFailure(error));
//                 console.log("Tell Wendy error occurred in fetchTodosFirebase(): \n" + error);
//             })
//     }
// }

// fetchTodo from firestore
// export const fetchTodosFirebase = (state) => {
//     return (dispatch) => {
//         const db = firebase.getFirestore();
//         const data = state.firestore.ordered;
//         dispatch(fetchTodosRequest());
//         return fetch(fbconfig.databaseURL).then(
//             firebase.collection('todos').doc(data.id).set({
//                 ...state,
//                 id: data.id,
//                 filter: data.filter,
//                 todo: data.todo,
//             }).then((response) => {
//                 let v = response.json();
//                 console.log(v);
//                     v.then(data => {
//                         dispatch(fetchTodosSuccess(data));
//                     })
//                 },
//                 error => {
//                     dispatch(fetchTodosFailure(error));
//                     console.log("Tell Wendy error occurred in fetchTodosFirebase(): \n" + error);
//                 }
//             )
//         )
//     }
// }

/**
 * addTodo
 * @param {*} text 
 */
// export const addTodo = (text) => ({
//     type: ADD_TODO,
//     id: nextTodoId++,
//     text
// })

export const addTodo = (todos, text) => {
    return (dispatch) => {
        const firestore = getFirestore();
        firestore.collection('todos').add({
            ...todos,
            id: ++nextTodoId,
            text: text,
            completed: false,
            filter: 'all',
        }).then( () => {
            dispatch({
                type: ADD_TODO,
                text
            })
        }).catch((err) => {
            console.log("ERR: ADDING TODO", err)
        })

    }
}

/**
 * toggleTodo
 * @param {*} id 
 */
// export const toggleTodo = (id) => ({
//     type: TOGGLE_TODO,
//     id
// })
export const toggleTodo = (id) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_TODO,
            id
        })
    }
}

/**
 * setFilter
 * @param {*} filter 
 */
export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
})

/**
 * setTodoText
 * @param {*} text 
 */
export const setTodoText = (text) => ({
    type: SET_TODO_TEXT,
    text
})