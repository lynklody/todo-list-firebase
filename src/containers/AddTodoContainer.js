import { connect } from 'react-redux'
import { setTodoText, addTodo } from '../actions'
import AddTodo from '../component/AddTodo'
import { getText } from "../selectors"

const mapStateToProps = state => ({
    // text: state.text
    text: getText(state)
})

const mapDispatchToProps = dispatch => ({
    setTodoText: text => dispatch (setTodoText(text)),
    addTodo: text => dispatch(addTodo(text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)