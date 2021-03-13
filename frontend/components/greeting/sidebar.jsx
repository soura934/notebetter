import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
        return (
        <div className="wrapper">
            
            <div className="sidebar">
            {props.currentUser.email} 
            <div id="logout">
            <button  onClick={props.logout}>Logout</button>
            </div>
            </div>
            </div>
        )
    }
 

export default Sidebar;