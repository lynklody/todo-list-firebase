import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import text from './text'
import auth from './auth'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
    todos,
    text,
    filter,
    auth,
    firestore: firestoreReducer, // sync firestore data to redux state
    firebase: firebaseReducer // for auth
})