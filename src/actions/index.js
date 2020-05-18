import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT, 
    FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './actionTypes'
import firebase from 'firebase/app'

// let nextTodoId = 0

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

// invoke an async action to fetch items from a non-firestore location
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

/**
 * addTodo
 * @param {*} text 
 */
// export const addTodo = (text) => ({
//     type: ADD_TODO,
//     id: nextTodoId++,
//     text
// })

export const addTodo = (newText) => {
    return (dispatch) => {
        // const db = getFirebase();
        const db = firebase.firestore();
        db.collection('todos').add({
            text: newText,
            completed: false,
            filter: 'all',
        }).then((ref) => {
            console.log("ADDED doc to fs WITH ID", ref.id)
            dispatch({
                type: ADD_TODO,
                newText
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
