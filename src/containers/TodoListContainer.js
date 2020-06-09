import { connect } from 'react-redux'
import TodoList from '../component/TodoList'
import { toggleTodo, fetchTodos, fetchTodosFirebase } from '../actions'
import { getVisibleTodos } from "../selectors"
import { firestoreConnect } from 'react-redux-firebase' // HOC
import { compose } from 'redux'

// const getVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case 'all':
//             return todos
//         case 'completed':
//             return todos.filter(t => t.completed)
//         case 'active':
//             return todos.filter(t => !t.completed)
//         default:
//             return new Error('Unknown filter: ' + filter)
//     }
// }

// const mapStateToProps = (state) => {
//     // todos: getVisibleTodos(state.todos.data, state.filter)
//     return {
//         // todos: getVisibleTodos(state.firestore.ordered.todos)
//         todos: getVisibleTodos(state)
//     }
// }

// const mapStateToProps = ({ firestore: { ordered } }) => {
const mapStateToProps = (state) => {
    const ordered = state.firestore.ordered
    return ({
        requesting: state.firestore.status.requesting,
        filter: ordered.filter,
        todos: ordered.todos
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    // fetchTodos: () => dispatch(fetchTodos()),
    // fetchTodosFirebase: (state) => dispatch(fetchTodosFirebase(state))
    }
}

export default compose(
    firestoreConnect(() => [ // connected to rootreducer firestoreReducer property
        // { collection: 'filter' }   // under state.firestore.data
        // `todos/${id}`,
        'todos',
        'filter'
    ]),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(TodoList);