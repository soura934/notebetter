import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
        return (
        <div className="sidebar">
            <div className="sidebar-dropdown">
                <div className="sidebar-profile">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <div className="profile-name">
                        {props.currentUser.email}
                        <i className="fas fa-caret-down"></i>                    </div>
                </div> 
                <div id="logout">
                    <button  onClick={props.logout}>Logout</button>
                </div>
            </div>
            <div className="add">
            <i class="fas fa-plus"></i>Add New a Note
            </div>
        </div>
        )
    }
 

export default Sidebar;