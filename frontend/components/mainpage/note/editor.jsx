import React from "react";
import { format } from 'timeago.js';


// Must create notes from here instead from nav



class Editor extends React.Component {
    constructor(props) {
        super(props);
        // this.state = Object.assign({}, this.props.note)
        this.handleDelete = this.handleDelete.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchNote(this.props.note);
    // }

    handleDelete(){
        this.props.deleteNote(this.props.noteId)
    }

    render() { 
        // debugger
        if (!this.props.note){
            return null;
        }
        const note = this.props.note
        return ( 
        <div className="note">
            <div className="note-header">
                <div className="note-header-title-button">
                    <div className="note-header-title">
                        <h1>{note.title}</h1>
                    </div>
                    <div className="note-action-button">
                        <button onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
                <div className="note-header-date">
                Last updated {format(note.updated_at)}
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
        </div> );
    }
}
 
export default Editor;