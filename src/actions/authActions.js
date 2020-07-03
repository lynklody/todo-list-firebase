import { getFirebase } from '../index'
import { LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes'

export const signinAction = (credentials) => {
    return (dispatch) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      }).catch((err) => {
        dispatch({ type: LOGIN_ERROR, err });
      });
    }
}