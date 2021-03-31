import { connect } from "react-redux";
import {deleteNote, updateNote, fetchNote} from "../../actions/note_actions"
import Editor from './editor';





export default withRouter(connect(mstp, mdp)(Editor));