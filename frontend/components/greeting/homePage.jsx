import React from 'react'
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            <nav className="nav">
                <div className="logo-and-sites">
                    <div className="logo">
                        <div className="logo-img">
                            <img src="https://www.datocms-assets.com/15991/1580862562-test.gif?auto=format"/>
                        </div>
                        <h1>NoteBetter</h1>
                    </div>
                    <div className="sites">
                        <ul>
                            <li>Github</li>
                        </ul>
                        <ul>
                            <li>LinkedIn</li>
                        </ul>
                        <ul>
                            <li>AngelList</li>
                        </ul>
                    </div>
                </div>
                <div className="logsbutton">
                    <Link to="/login">Login</Link> 
                    or
                    <Link to="/signup">Signup</Link>
                </div>
            </nav>
        <div className="body">
        <div className="main-img">
        <img src="https://evernote.com/c/assets/homepage/hp_hero_note@2x__en.png?eb8f5a8987a4b6fb"/>
        </div>
        <div className="body-li">
        <li>
                <h2 className="body-description">WORK ANYWHERE</h2>
            <ul>
                <li>Keep important info handy by syncing your notes to all your devices.</li>
            </ul>
        </li>
        <li>
                <h2 className="body-description">YOUR NOTES, YOUR WAY</h2>
            <ul>
                <li>Express yourself with formatting tools that help you write how you think.</li>
            </ul>
        </li>
        <li>
                <h2 className="body-description">FIND THINGS FAST</h2>
            <ul>
                <li>Get what you need, when you need it. Search gives you results as you type.</li>
            </ul>
        </li>
        </div>
        </div>
        <div id="line"></div>
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
                <h2 className="footer-header">Framework</h2>
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


export default HomePage;