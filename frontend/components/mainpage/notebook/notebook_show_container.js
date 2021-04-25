import {  } from '../../../actions/notebook_actions';
import { connect } from 'react-redux';
import NotebookShow from './notebook_show';


const mstp = (state, ownProps) => {
    debugger
    return {
        notes: state.entities.notebooks[ownProps.match.params.notebookId].notes
    }
}

const mdp = (dispatch) => {
    return {


    }
}

export default connect(mstp, mdp)(NotebookShow);