import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
        return (
        <div className="sidebar">
            <div className="sidebar-profile-name">
                {props.currentUser.email}
            </div> 
            <div id="logout">
                <button  onClick={props.logout}>Logout</button>
            </div>
        </div>
        )
    }
 

export default Sidebar;