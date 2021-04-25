import React from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {title: 'Untitled', body: '', user_id: this.props.currentUser.id};  
        this.handleCreateNote = this.handleCreateNote.bind(this);
    }

    handleCreateNote(e) {
        e.preventDefault();
        if (this.props.createNote(this.state)){
            this.props.createNote(this.state)
            .then((obj) => {
                let noteId = obj.note.id;
                // debugger
                return (this.props.history.push(`/app/notes/${noteId}`)) 
            })

        }
    }

    render() { 
        return (
        <div className="sidebar">
            <div className="sidebar-dropdown">
                <div className="sidebar-profile">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <div className="profile-name">
                        {this.props.currentUser.email}
                        <i className="fas fa-angle-down"></i>                
                    </div>
                </div> 
                <div id="logout">
                    <button  onClick={this.props.logout}>Logout</button>
                </div>
            </div>
            <div className="add">
            <button onClick={this.handleCreateNote}><i className="fas fa-plus"></i>Add New a Note</button>
            </div>      
            <div className="contents">
                <ul>
                    <Link to="/app/notes">
                        <li>
                            <i className="fas fa-sticky-note"></i>
                            Notes
                        </li>
                    </Link>
                </ul>
                <ul>
                <Link to="/app/notebooks">
                    <li>
                            <i className="fas fa-book"></i>
                            Notebooks
                    </li>
                </Link>
                </ul>
            </div>
            <div className="sidebar-footer">
                <div className="icon-footer">
                    <a href="https://github.com/soura934" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/mansour-dione" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://angel.co/u/mansour-dione" target="_blank"><i className="fab fa-angellist"></i></a>
                </div>
            </div>
        </div>
        )
    }
}
 

export default Sidebar;