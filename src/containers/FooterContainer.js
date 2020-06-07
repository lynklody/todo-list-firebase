import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Footer from '../component/Footer'
import { getFilter } from "../selectors"
import { firestoreConnect } from 'react-redux-firebase' // HOC
import { compose } from 'redux'
import { isLoaded } from 'react-redux-firebase'

const mapStateToProps = (state) => {
// const mapStateToProps = ({ firestore: { ordered } }) => {
    // filter: state.filter
    // filter: getFilter(state)
    const ordered = state.firestore.ordered
    if (isLoaded(ordered.filter)) {
        return ({
            filter: getFilter(ordered)
        })
    }
}

const mapDispatchToProps = dispatch => ({
    setFilter: filter  => dispatch (setFilter(filter))
})

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Footer)

export default compose(
    firestoreConnect(() => [
        'filter'
    ]),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Footer);