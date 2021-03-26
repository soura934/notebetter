import React from 'react';

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
                <div className="notes-list-box">
                    <div className="notes-list-box-header">
                        <div className="notes-list-box-header-title">
                            <h1>{note.title}</h1>
                        </div>
                        <div className="notes-list-box-header-body">
                            <p>{note.body}</p>
                        </div>
                    </div>
                    <div className="notes-list-body-dates">
                        <p>March 21</p>
                    </div>
                </div>
            </li>
        });
        return ( 
                noteLi
         );
    }
}
 
export default NoteList;