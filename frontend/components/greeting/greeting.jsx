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
            <nav className="nav">
                <div className="logo"><h1>Notebetter</h1></div>
                <div className="logsbutton">
                <Link to="/login">Login</Link>
                <>or</>
                <br />
                <Link to="/signup">Signup</Link>
                </div>
            </nav>
            <div className="main-img">
            <img src="https://evernote.com/c/assets/homepage/hp_hero_note@2x__en.png?eb8f5a8987a4b6fb"/>
            </div>
            <footer className="footer">
                <li>
                    <h2 className="footer-header">Languages</h2>
                <ul>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Ruby</li>
                    <li>SQL</li>
                </ul>
                </li>
                <li>
                    <h2>Framework</h2>
                <ul>
                    <li>Rails</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>jQuery</li>
                </ul>
                </li>
            </footer>
        </div>
            )
    }
    return props.currentUser ? loggedin() : homePage();
}

export default Greeting;