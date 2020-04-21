import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import text from './text'
// import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
    todos,
    text,
    filter,
    firebase: firebaseReducer // sync props to database, according to component actions
})