import React from "react";
import { format } from 'timeago.js';

// ///////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// Must remove the new extra note with the same id as the one
// last clicked on or last created when you click on a note list
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////


class Editor extends React.Component {
    constructor(props) {
        super(props);
            this.state = Object.assign({}, this.props.note)
        // debugger
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
    }

    componentDidMount(){
        // thi
    }
    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.match.params.noteId !== prevProps.match.params.noteId) {
          this.setState({id: this.props.note.id, title: this.props.note.title, body: this.props.note.body});
        }
        // need to find a way when update the state to change to the newest note
      }

    handleTitle(e){
        e.preventDefault();
        this.setState({title: e.target.value})
    }
    handleBody(e){
        this.setState({body: e.target.value})
    }

    handleDelete(){
        this.props.deleteNote(this.props.noteId)
    }
    handleUpdate(){
        this.props.updateNote(this.state);
    }

    render() { 
        
        const note = this.props.note
        return ( <>
        {this.props.note ? <div className="note"> 
        
            <div className="note-header">
                <div className="note-header-title-button">
                    <div className="note-header-title">
                        <h1>NoteBook Name</h1>
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
                    <input placeholder="Title" 
                    value={this.state.title}
                    onChange={this.handleTitle}
                    onBlur={this.handleUpdate}>
                    </input>
                </div>
                <div className="note-body-body">
                    <textarea placeholder="Start writing"
                    value={this.state.body}
                    onBlur={this.handleUpdate}
                    onChange={this.handleBody}>
                    </textarea>
                </div>
            </div>
        </div> : null}
        </>);
    }
}
 
export default Editor;