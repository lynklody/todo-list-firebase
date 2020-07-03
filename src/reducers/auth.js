import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionTypes'

const initialState = {}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            console.log("LOGIN failed")
            return {
                ...state,
                authError: "Login failed"
            }
        case LOGIN_SUCCESS:
            console.log("LOGIN success!")
            return {
                ...state,
                authError: null
            }
        default:
            return state;
    }
}

export default authReducer