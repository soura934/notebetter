import { fetchNotebooks } from '../../../actions/notebook_actions';
import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';


const mstp = (state, ownProps) => {
    return {
        notes: Object.values(state.entities.notebooks),
        title: 'All Notes'
    }
}

const mdp = (dispatch) => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks())
    }
}

export default connect(mstp, mdp)(NotebookIndex);