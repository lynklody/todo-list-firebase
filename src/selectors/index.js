// used in AddTodoContainer
export const getText = (state) => state.text

// used in TodoListContainer / Footer Container
export const getFilter = (state) => state.filter

// used in TodoListContainer
export const getVisibleTodos = (state) => {
    const { todos: {data}, filter } = state
    switch (filter) {
        case 'all':
            return data
        case 'completed':
            return data.filter(t => t.completed)
        case 'active':
            return data.filter(t => !t.completed)
        default:
            return new Error('Unknown filter: ' + filter)
    }
}