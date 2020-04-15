import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Footer from '../component/Footer'
import { getFilter } from "../selectors"

const mapStateToProps = state => ({
    // filter: state.filter
    filter: getFilter(state)
})

const mapDispatchToProps = dispatch => ({
    setFilter: filter  => dispatch (setFilter(filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)