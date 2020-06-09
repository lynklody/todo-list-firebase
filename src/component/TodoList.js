import React from 'react';
import Todo from './Todo';
import { Loading, EmptyList, EmptyFilter } from './Exceptions'
import { CardContent, Container } from '@material-ui/core'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { getVisibleTodos } from '../selectors'

// class TodoList extends Component {

    // componentDidMount() {
        // this.props.fetchTodos();
        // this.props.fetchTodosFirebase();
    // }

// const TodoList = (props) => {
const TodoList = ({ todos, filter, toggleTodo }, props) => {
    // render() {
        // const {todos, toggleTodo} = this.props;   
    if (!isLoaded(todos) || !isLoaded(filter)) {
    // if (requesting.todos && requesting.filter) {
        return ( <Loading /> )
    }
    if (isEmpty(todos)) {
        return ( <EmptyList /> )
    }
    if (isEmpty(filter)) {
        return ( <EmptyFilter />)
    }
    // FILTER TODO LIST
    todos = getVisibleTodos(todos, filter)
    return (   // isLoaded() && !isEmpty()
        <Container>
            <CardContent>
                {/* <ul>
                    {
                        props.todos.map(todo => {
                        // return <li> {todo.text} </li>
                        return <Todo key={todo.id} {...todo} 
                            onClick={() => {props.toggleTodo(todo.id)}} />
                        })
                    }
                </ul> */}
                <ul>
                    {
                        todos.map(todo => {
                            const handleClick = (e) => {
                                e.preventDefault()
                                toggleTodo(todo.id)
                                console.log(todo.id)
                            }
                            return <Todo key={todo.id} {...todo} 
                                onClick={handleClick} />                           
                        })
                    }
                </ul>
            </CardContent>
        </Container>
    );
    // }
}

export default TodoList;