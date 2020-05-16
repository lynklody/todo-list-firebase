import React, { useEffect } from 'react';
import Todo from "./Todo";
import { CardContent, Container } from '@material-ui/core'
import { fetchTodos, fetchTodosFirebase } from '../actions'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

// class TodoList extends Component {

    // componentDidMount() {
        // this.props.fetchTodos();
        // this.props.fetchTodosFirebase();
    // }

// const TodoList = (props) => {
    const TodoList = ({firebase, todos}, props) => {
    // useEffect(() => {
    //     // fetchTodos();
    //     fetchTodosFirebase();
    // }, [])

    // render() {
        // const {todos, toggleTodo} = this.props;
    // console.log("TODOLIST compo",todos)
    if (!isLoaded(todos)) {
        return (
            <Container>
                <CardContent>
                    Loading...
                </CardContent>
            </Container>
        )
    }
    if (isEmpty(todos)) {
        return (
            <Container>
                <CardContent>
                    :( Todo list is empty
                </CardContent>
            </Container>
        )
    }
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
                            return <Todo key={todo.id} {...todo} 
                             />                           
                        })
                    }
                </ul>
            </CardContent>
        </Container>
    );
    // }
}

export default TodoList;