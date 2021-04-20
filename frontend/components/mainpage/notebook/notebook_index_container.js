import { fetchNotebooks } from '../../../actions/notebook_actions';
import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';


const mstp = (state, ownProps) => {
    return {
        notebooks: Object.values(state.entities.notebooks),
        title: 'All Notebooks'
    }
}

const mdp = (dispatch) => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks())
    }
}

export default connect(mstp, mdp)(NotebookIndex);