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
        // <div className="note">hello</div>
            <NoteList notes={this.props.notes}/>

         );
    }
}
 
export default NoteIndex;