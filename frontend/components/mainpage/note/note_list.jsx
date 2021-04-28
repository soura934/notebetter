import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

class NoteList extends React.Component {
    constructor(props) {
        super(props);

        this.sampleBody = this.sampleBody.bind(this);
    }

    sampleBody(text){
        if(text.length > 50){
            return text.slice(0,50) + '...'
        } else {
            return text;
        }
    }

    render() { 
        if (this.props.notes === {}){
            return <p>No notes yet!</p>;
        }
        const sortedNotes = this.props.notes.sort(function (a, b) {
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
        console.log(this.props.notebookId)
        const noteLi = sortedNotes.map(note => {
            return <li key={note.id}>
                <Link className="notes-list-box" to={this.props.notebookId < 0 ?
                     `/app/notes/${note.id}` : `/app/notebooks/${this.props.notebookId}/notes/${note.id}`}>
                    <div className="notes-list-box-header">
                        <div className="notes-list-box-header-title">
                            <h1>{note.title}</h1>
                        </div>
                        <div className="notes-list-box-header-body">
                            <p>{this.sampleBody(note.body)}</p>
                        </div>
                    </div>
                    <div className="notes-list-body-dates">
                        <p>{format(note.updated_at)}</p>
                    </div>
                </Link>
            </li>
        });
        return ( 
                noteLi
         );
    }
}
 
export default NoteList;