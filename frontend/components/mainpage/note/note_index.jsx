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
            // <NoteList notes={this.props.notes}/>

         );
    }
}
 
export default NoteIndex;