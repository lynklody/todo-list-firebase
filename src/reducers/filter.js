import { SET_FILTER } from '../actions/actionTypes';

const filterReducer = (state = 'all', action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter
            // return {
            //     ...state,
            //     filter: action.filter
            // }
        default:
            return state
    }
}
export default filterReducer