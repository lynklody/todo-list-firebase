import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import text from './text'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
    todos,
    text,
    filter,
    firestore: firestoreReducer // sync props to database, according to component actions
})