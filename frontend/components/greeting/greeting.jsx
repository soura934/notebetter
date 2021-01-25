import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const loggedin = () => {
        // debugger
        return (
            <div>
                {props.currentUser.email} Welcome to your notes
                <br />
                <button onClick={props.logout}>Logout</button>
            </div>
        )
    }
    const homePage = () => {
        return (
        <div>
            <nav>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/signup">Signup</Link>
            </nav>
        </div>
            )
    }
    return props.currentUser ? loggedin() : homePage();
}

export default Greeting;