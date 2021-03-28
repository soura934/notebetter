import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    


    render() { 
        if (this.props.notes === {}){
            return <p>No notes yet!</p>;
        } 
        const noteLi = this.props.notes.map(note => {
            return <li key={note.id}>
                <Link className="notes-list-box" to={`/app/notes/${note.id}`}>
                    <div className="notes-list-box-header">
                        <div className="notes-list-box-header-title">
                            <h1>{note.title}</h1>
                        </div>
                        <div className="notes-list-box-header-body">
                            <p>{note.body}</p>
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