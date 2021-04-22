import { createNotebook } from '../../../actions/notebook_actions';
import { connect } from 'react-redux';
import NotebookForm from './notebook_form';

const mstp = (state, ownProps) => {
    return {
        notebooks: Object.values(state.entities.notebooks),
        user: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch) => {
    return {
        createNotebook: (notebook) => dispatch(createNotebook(notebook))
    }
}
export default connect(mstp, mdp)(NotebookForm);