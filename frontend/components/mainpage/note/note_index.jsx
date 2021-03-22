import React from 'react';
import NoteList from "./note_list"

class NoteIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() { 
        return ( 
        <div className="list-of-notes">
            <div className="notes-header">
                <div className="notes-header-title">
                    <h1>All Notes</h1>
                </div>
                <div className="notes-sub-header">
                    <p className="notes-count">8 notes</p>
                </div>
            </div>
        </div>
            // <NoteList notes={this.props.notes}/>

         );
    }
}
 
export default NoteIndex;