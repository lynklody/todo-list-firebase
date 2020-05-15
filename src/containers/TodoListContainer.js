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

const mapStateToProps = (state) => {
    // todos: getVisibleTodos(state.todos.data, state.filter)
    // (state, props) => ({
    //     todos: state.firestore.ordered.todos && state.firestore.ordered.todos[props.id]
    //   })
    // const todoslice = state.firestore.ordered.todos && state.firestore.ordered.todos[props.id]
    return {
        todos: getVisibleTodos(state.firestore.ordered.todos)
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    // fetchTodos: () => dispatch(fetchTodos()),
    fetchTodosFirebase: (state) => dispatch(fetchTodosFirebase(state))
})

export default compose(
    firestoreConnect(() => [ // connected to rootreducer firestoreReducer property
        { collection: 'todos' }
    ]),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(TodoList);

// export default compose(
//     firestoreConnect((props) => [ // connected to rootreducer firestoreReducer property
//         { collection: 'todos', doc: props.id }
//     ]),
//     connect(
//         mapStateToProps,
//         mapDispatchToProps
//     )
// )(TodoList);