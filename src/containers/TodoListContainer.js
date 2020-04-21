import { connect } from 'react-redux'
import TodoList from '../component/TodoList'
import { toggleTodo, fetchTodos, fetchTodosFirebase } from '../actions'
import { getVisibleTodos } from "../selectors"
import { firestoreConnect } from 'react-redux-firebase'
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

const mapStateToProps = (state) => {
    // todos: getVisibleTodos(state.todos.data, state.filter)
    console.log("state in todolist container:")
    console.log(state)
    return {
        todos: getVisibleTodos(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    // fetchTodos: () => dispatch(fetchTodos()),
    fetchTodosFirebase: (state) => dispatch(fetchTodosFirebase(state))
})

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([ // connected to rootreducer firestoreReducer property
        { collection: 'todos' }
    ])
)(TodoList);

// export default compose(
//         withFirestore,
//         connect(
//             mapStateToProps,
//             mapDispatchToProps,
//             (state) => ({
//                 todos: state.firestore.ordered.todos
//             })
//         )
//     )(TodoList);