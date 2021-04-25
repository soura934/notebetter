import {  } from '../../../actions/notebook_actions';
import { connect } from 'react-redux';
import NotebookShow from './notebook_show';


const mstp = (state, ownProps) => {
    return {
        notebooks: Object.values(state.entities.notebooks),

    }
}

const mdp = (dispatch) => {
    return {


    }
}

export default connect(mstp, mdp)(NotebookShow);