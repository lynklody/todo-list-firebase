import { connect } from 'react-redux'
import { setTodoText, addTodo } from '../actions'
import AddTodo from '../component/AddTodo'
import { getText } from "../selectors"
import { firestoreConnect } from 'react-redux-firebase' // HOC
import { compose } from 'redux'

const mapStateToProps = state => ({
    // text: state.text
    text: getText(state)
})

const mapDispatchToProps = dispatch => ({
    setTodoText: text => dispatch (setTodoText(text)),
    addTodo: text => dispatch(addTodo(text))
})

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AddTodo)

export default compose(
    firestoreConnect(() => [
        // { collection: 'todos' } 
        'todos', 'filter'
    ]),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(AddTodo);