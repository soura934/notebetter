import React from "react"
import NoteIndex from "../note/note_index_container"

class NotebookShow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        if (this.props.notes === {}) {
            return <div>no notes yet</div>
        } 
        return ( 
            <NoteIndex 
            notes={this.props.notebook.notes}
            title={this.props.notebook.title} 
            notebookId={this.props.notebookId}
            />
         );
    }
}
 
export default NotebookShow;