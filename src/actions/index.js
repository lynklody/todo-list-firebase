import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT, 
    FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './actionTypes'
import { getFirebase } from 'react-redux-firebase';

let nextTodoId = 0

// sync actions
const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
})

const fetchTodosSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data // todo list data
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
// export const fetchTodosFirebase = (state, todos) => {
//     return (dispatch, getFirebase) => {
//         const firebase = getFirebase();
//         const data = state.firebase.todos.data;
//         dispatch(fetchTodosRequest());
//         firebase.collection('todos').add({
//             ...todos,
//             id: data.id,
//             text: data.text,
//             completed: data.completed,
//         }).then((response) => {
//                 response.json().then (data => {
//                     dispatch(fetchTodosSuccess(data));
//                 })
//             },
//             error => {
//                 dispatch(fetchTodosFailure(error));
//                 console.log("Tell Wendy error occurred in fetchTodosFirebase(): \n" + error);
//             }
//         )
//     }
// }

// fetchTodo from firestore
export const fetchTodosFirebase = (state) => {
    return (dispatch, getFirebase) => {
        const firebase = getFirebase();
        const data = state.firebase.todos.data['todos'];
        dispatch(fetchTodosRequest());
        firebase.collection('todos').add({
            ...state,
            id: data.id,
            text: data.text,
            completed: data.completed,
        }).then(() => {
            dispatch(fetchTodos());
            dispatch(fetchTodosSuccess(data));
        }).catch(err => {
            dispatch(fetchTodosFailure(err), "Tell Wendy error occurred in fetchTodosFirebase(): \n" + err);
        });
    }
}

/**
 * addTodo
 * @param {*} text 
 */
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

/**
 * toggleTodo
 * @param {*} id 
 */
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

/**
 * setFilter
 * @param {*} filter 
 */
export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

/**
 * setTodoText
 * @param {*} text 
 */
export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})