// import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT, GET_TODO,
//     FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './actionTypes'
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT, GET_TODO } from './actionTypes'
import firebase from 'firebase/app'

// let nextTodoId = 0

// sync action creators
// const fetchTodosRequest = () => ({
//     type: FETCH_TODOS_REQUEST
// })

// const fetchTodosSuccess = (payload) => ({
//     type: FETCH_TODOS_SUCCESS,
//     payload // todo list data
// })

// const fetchTodosFailure = (error) => ({
//     type: FETCH_TODOS_FAILURE,
//     error
// })

// invoke an async action to fetch items from a non-firestore location
// export const fetchTodos = () => {
//     return (dispatch) => { // return a function, need a middleware(redux-thunk)
//         dispatch(fetchTodosRequest());
//         return fetch('.\\mock\\initial_todos.json').then( // This is how to access file in public
//             response => {
//                 response.json().then(data => {
//                     dispatch(fetchTodosSuccess(data));
//                 })
//             },
//             error => {
//                 dispatch(fetchTodosFailure(error));
//                 console.log("Tell Wendy an error occurred in fetchTodos(): \n"+ error);
//             }
//         )
//     }
// }

/** DEAD FUNC FOR NOW
 * getTodo: get a single document from firestore with the given id 
 * @param {*}  
 */
export const getTodo = (id) => {
    return async (dispatch) => {
        const db = firebase.firestore();
        await db.collection('todos').doc(id).get()
            .then( (doc) => {
                if (!doc.exists) {
                    console.log("ERR: Tell Wendy no such document!")
                } else {
                    console.log("print todo with id",id,": ",doc.data())
                    dispatch({
                        type: GET_TODO,
                        id
                    })
                }
            })
            .catch( (err) => {
                console.log("ERR: GETTODO: ", err)
            })
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
        const db = firebase.firestore();
        db.collection('todos').add({
            text: newText,
            completed: false,
            timestamp: new Date()
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
    return async (dispatch) => {
        const db = firebase.firestore();
        // // the following is a BUGGY version
        // const completed = getTodo(id);
        // console.log("completed=",completed)
        // await db.collection('todos').doc(id).update({
        //     completed: !completed,
        // })
        // .then( () => {
        //     console.log("SET completed to", completed)
        //     dispatch({
        //         type: TOGGLE_TODO,
        //         id
        //     })
        // }).catch((err) => {
        //     console.log("ERR: TOGGLE TODO:", err)
        // })
        await db.collection('todos').doc(id).get()
        .then((snapShot) => {
            const data = snapShot.data()
            console.log("SET completed to", data)
            return ( snapShot.ref.update({
                    completed: !data.completed,
                    text: data.text
                })
            )
        }).then(
            dispatch({
                type: TOGGLE_TODO,
                id
            })
        ).catch((err) => {
            console.log("ERR: TOGGLE TODO:", err)
        })
    }
}

/**
 * setFilter
 * @param {*} filter 
 */

export const setFilter = (filter) => {
    return (dispatch) => {
        const db = firebase.firestore();
        db.collection('filter').doc('main').set({
            filter: filter,
        }, {merge:true})
        .then( () => {
            console.log("SET filter to",filter)
            dispatch({
                type: SET_FILTER,
                filter
            })
        }).catch((err) => {
            console.log("ERR: SETTING FILTER", err)
        })
    }
}
// export const setFilter = (filter) => ({
//     type: SET_FILTER,
//     filter
// })

/**
 * setTodoText
 * @param {*} text 
 */
export const setTodoText = (text) => ({
    type: SET_TODO_TEXT,
    text
})
