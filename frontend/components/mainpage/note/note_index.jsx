import React from 'react';
// import NoteList from "./note_list"

class NoteIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() { 
        return ( <>
        <div className="list-of-notes">
            <div className="notes-list-header">
                <div className="notes-header-title">
                    <h1>All Notes</h1>
                </div>
                <div className="notes-sub-header">
                    <p className="notes-count">8 notes</p>
                </div>
            </div>
            <div className="notes-list-body">
                <div className="notes-list-box">
                    <div className="notes-list-box-header">
                        <div className="notes-list-box-header-title">
                            <h1>Car</h1>
                        </div>
                        <div className="notes-list-box-header-body">
                            <p>I have to bring him the money</p>
                        </div>
                    </div>
                    <div className="notes-list-body-dates">
                        <p>March 21</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <NoteList notes={this.props.notes}/> */}
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