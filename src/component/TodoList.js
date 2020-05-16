import React, { useEffect } from 'react';
import Todo from "./Todo";
import { CardContent, Container } from '@material-ui/core'
import { fetchTodos } from '../actions'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { getVisibleTodos } from '../selectors'
// import { toggleTodo } from '../actions'

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
    console.log("BEFORE", todos)
    todos = getVisibleTodos(todos)
    console.log("AFTER", todos)
    if (isEmpty(todos)) {
        return (
            <Container>
                <CardContent>
                    No To-do item at this moment. <br/>
                    Add something to start...
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
                            const handleClick = (e) => {
                                e.preventDefault()
                                props.toggleTodo(todo.id)
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