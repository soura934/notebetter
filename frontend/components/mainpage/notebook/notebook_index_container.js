import { fetchNotebooks, deleteNotebook, updateNotebook } from '../../../actions/notebook_actions';
import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';


const mstp = (state, ownProps) => {
    return {
        notebooks: Object.values(state.entities.notebooks),
        user: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch) => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        createNotebook: (notebook) => dispatch(createNotebook(notebook)),
        deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
        updateNotebook: (notebook) => dispatch(updateNotebook(notebook))
    }
}

export default connect(mstp, mdp)(NotebookIndex);