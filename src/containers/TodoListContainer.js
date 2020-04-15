import { connect } from 'react-redux'
import TodoList from '../component/TodoList'
import { toggleTodo, fetchTodos } from '../actions'
import { getVisibleTodos } from "../selectors"

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

const mapStateToProps = (state) => ({
    // todos: getVisibleTodos(state.todos.data, state.filter)
    todos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    fetchTodos: () => dispatch(fetchTodos())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);