import React from "react"
import NoteIndex from "../note/note_index_container"

class NotebookShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // if (!this.props.notes) {
        //     return <div>no notebooks yet</div>
        // } 
        return ( 
            <NoteIndex notes={this.props.notes} />
         );
    }
}
 
export default NotebookShow;