import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
        return (
        <div className="sidebar">
            <div className="sidebar-dropdown">
                <div className="sidebar-profile">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <div className="profile-name">
                        {props.currentUser.email}
                        <i className="fas fa-angle-down"></i>                    </div>
                </div> 
                {/* <div id="logout">
                    <button  onClick={props.logout}>Logout</button>
                </div> */}
            </div>
            <div className="add">
            <button><i className="fas fa-plus"></i>Add New a Note</button>
            </div>
            
            <div className="contents">
                <div className="notes">
                <i class="fas fa-sticky-note"></i>
                Notes
                </div>
                <div className="notebooks">
                <i class="fas fa-book"></i>
                Notebooks
                </div>
            </div>
        </div>
        )
    }
 

export default Sidebar;