import React from 'react';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }



    render() { 
        if (this.props.notes === {}){
            return <p>No notes yet!</p>;
        } 
        const noteLi = this.props.notes.map(note => {
            return <li key={note.id}>
                <h2>{note.title}</h2>
                <p>{note.body}</p>
            </li>
        });
        return ( 
            <div className="note-list">
                {noteLi}
            </div>
         );
    }
}
 
export default NoteList;