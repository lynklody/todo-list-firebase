import { connect } from 'react-redux'
import SignIn from '../component/SignIn'
import { signinAction } from '../actions/authActions'
import { firestoreConnect } from 'react-redux-firebase' // HOC
import { compose } from 'redux'

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signinAction: (credential) => dispatch(signinAction(credential))
    }
}

export default compose(
    firestoreConnect(() => [ // connected to rootreducer firestoreReducer property
        { collection: 'todos', orderBy: ['timestamp', 'asc']},
        'filter'
    ]),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(SignIn);