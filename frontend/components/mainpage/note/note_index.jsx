import React from 'react';
import NoteList from "./note_list"

class NoteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() { 
        // debugger
        return ( <>
        <div className="list-of-notes">
            <div className="notes-list-header">
                <div className="notes-header-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="notes-sub-header">
                    <p className="notes-count">{this.props.notes.length} notes</p>
                </div>
            </div>
            <div className="notes-list-body">
                <NoteList notes={this.props.notes}/>
            </div>
        </div>
        <div className="note">
            <div className="note-header">
                <div className="note-header-title-button">
                    <div className="note-header-title">
                        <h1>ToDo Tomorrow</h1>
                    </div>
                    <div className="note-action-button">
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div className="note-header-date">
                Last edited on Mar 21, 2021
                </div>
            </div>
            <div className="note-body">
                <div className="note-body-title">
                    <input placeholder="Title"></input>
                </div>
                <div className="note-body-body">
                    <textarea placeholder="Start writing"></textarea>
                </div>
            </div>
        </div>
    </>

         );
    }
}
 
export default NoteIndex;