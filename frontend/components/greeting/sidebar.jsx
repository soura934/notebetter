import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
        return (
        <div className="sidebar">
            
            <div className="sidebar-pp">
            {props.currentUser.email} 
            <div id="logout">
            <button  onClick={props.logout}>Logout</button>
            </div>
            </div>
            </div>
        )
    }
 

export default Sidebar;