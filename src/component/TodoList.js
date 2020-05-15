import React, { useEffect } from 'react';
import Todo from "./Todo";
import { CardContent, Container } from '@material-ui/core'
import { fetchTodos, fetchTodosFirebase } from '../actions'

// class TodoList extends Component {

    // componentDidMount() {
        // this.props.fetchTodos();
        // this.props.fetchTodosFirebase();
    // }

const TodoList = (props) => {
    useEffect(() => {
        // fetchTodos();
        fetchTodosFirebase();
    }, [])
    // render() {
        // const {todos, toggleTodo} = this.props;
        return (
            <Container>
                <CardContent>
                    <ul>
                        {
                            props.todos.map(todo => {
                            // return <li> {todo.text} </li>
                            return <Todo key={todo.id} {...todo} 
                                onClick={() => {props.toggleTodo(todo.id)}} />
                            })
                        }
                    </ul>
                </CardContent>
            </Container>
        );
    // }
}

export default TodoList;