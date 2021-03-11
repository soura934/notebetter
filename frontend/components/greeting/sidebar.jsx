import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
        return (
        <div className="wrapper">
            
            <div className="sidebar">
            <div id="logout">
            <button  onClick={props.logout}>Logout</button>
            </div>
            {props.currentUser.email} 
                {props.noteLi}
            </div>
            </div>
        )
    }
 

export default Sidebar;