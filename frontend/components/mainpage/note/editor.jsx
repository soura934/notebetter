import React from "react";
import { format } from 'timeago.js';


class Editor extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                id: null,
                title: "",
                body: "",
                // notebooks: this.props.notebooks,
                // ready: false
            }
        // debugger
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
    }

    componentDidMount(){
        this.setState(this.props.note);
        // this.props.fetchNotebooks().then(payload => {
        //     let notebooks = {};
        //     debugger
        //     payload.forEach(notebook =>  notebooks[notebook.id] = notebook)
        //     this.setState({notebooks})
        //     this.setState({ready: true});
        // })
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.noteId !== prevProps.match.params.noteId) {
            this.props.fetchNotebook(this.props.note.notebook_id);
            this.setState(this.props.note);
        }
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
    handleUpdate(e){
        e.preventDefault();
        const {body, title, id} = this.state;
        this.props.updateNote({body, title, id});
    }

    render() { 
        
        const {note, notebook} = this.props
        // const notebook = Object.keys(this.state.notebooks).length > 0 ? this.state.notebooks[note.notebook_id] : {title:""};
        return ( <>
        {note && notebook ? <div className="note"> 
        
            <div className="note-header">
                <div className="note-header-title-button">
                    <div className="note-header-title">
                        <h1>{notebook.title}</h1>
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