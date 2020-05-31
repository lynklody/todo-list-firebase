import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Footer from '../component/Footer'
import { getFilter } from "../selectors"
import { firestoreConnect } from 'react-redux-firebase' // HOC
import { compose } from 'redux'

const mapStateToProps = state => ({
    // filter: state.filter
    filter: getFilter(state)
})

const mapDispatchToProps = dispatch => ({
    setFilter: filter  => dispatch (setFilter(filter))
})

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Footer)

export default compose(
    firestoreConnect(() => [
        { collection: 'todos' } 
    ]),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Footer);