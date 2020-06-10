import { isLoaded } from 'react-redux-firebase'

// used in AddTodoContainer
export const getText = (state) => state.text

// used in TodoListContainer / Footer Container
export const getFilter = (state) => {
    if (isLoaded(state)) {
        return(
            state[0].filter
        )
    }
}

// used in TodoListContainer
export const getVisibleTodos = (todos, filter) => {
    // const { todos: {data}, filter } = state
    let rtn = [];
    if (isLoaded(todos) && isLoaded(filter)) {
        const f = filter[0].filter;
        if (f === 'all') {
            return todos;
        }
        todos.forEach( (todo) => {
            const {completed} = todo;
            switch(f) {
                case 'active':
                    if (!completed)
                        rtn.push(todo);
                    break;
                case 'completed':
                    if (completed)
                        rtn.push(todo);
                    break;
                default:
                    return new Error('Unknown filter: ' + f)
            }
        });
    }
    console.log("rtn=",rtn);
    return rtn;
}