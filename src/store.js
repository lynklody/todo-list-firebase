import { createStore } from 'redux'
import rootReducer from './reducers'
import { addTodo, toggleTodo, setFilter, setTodoText } from './actions'

const store = createStore(rootReducer)

// print initial state
console.log(store.getState())

// subscribe the changes in the state
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(addTodo('from store lalala'))
// store.dispatch(toggleTodo(0))
// store.dispatch(setFilter('active'))
// store.dispatch(setTodoText('Wendy meow'))

unsubscribe()