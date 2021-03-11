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
                    <h1 className="nav-header">Welcome!</h1>
            </div>
        )
    }
 

export default Sidebar;