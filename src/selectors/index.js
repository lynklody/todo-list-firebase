import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

// used in AddTodoContainer
export const getText = (state) => state.text
// export const getText = (state, id) => state.firestore.ordered.todos[id].todo.text

// used in TodoListContainer / Footer Container
export const getFilter = (state) => state.filter
// export const getFilter = (state, id) => state.firestore.ordered.todos[id].todo.filter

// used in TodoListContainer
export const getVisibleTodos = (todos) => {
    // const { todos: {data}, filter } = state
        return todos.map( (todo) => 
            {
                const { completed, filter } = todo
                switch(filter) {
                    case 'all':
                        return todo
                    case 'active':
                        if (!completed) {
                            return todo
                        } 
                        break;
                    case 'completed':
                        if (completed) {
                            return todo
                        } 
                        break;
                    default:
                        return new Error('Unknown filter: ' + todo.filter)
                }
                return todos
            }
        )
        // switch (todos.filter) {
        //     case 'all':
        //         return todos
        //     case 'completed':
        //         // return text.filter(t => t.completed)
        //         if (todos.completed) {
        //             return todos
        //         }
        //         break
        //     case 'active': 
        //         // return text.filter(t => !t.completed)
        //         if (!todos.completed) {
        //             return todos
        //         }
        //         break
        //     default:
        //         return new Error('Unknown filter: ' + todos.filter)
        // }
}