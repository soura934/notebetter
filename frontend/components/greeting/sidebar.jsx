import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            body: ""
         };
    }
    
    handleCreateNote() {

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
            <button><i className="fas fa-plus"></i>Add New a Note</button>
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
                <Link to="nothing">
                    <li>
                            <i className="fas fa-book"></i>
                            Notebooks
                    </li>
                </Link>
                </ul>
            </div>
            <div className="sidebar-footer">
                <div className="icon-footer">
                    Site Icons
                </div>
            </div>
        </div>
        )
    }
}
 

export default Sidebar;