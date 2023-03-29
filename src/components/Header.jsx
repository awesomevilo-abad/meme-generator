import React from "react";
import '../assets/style.css'


function Header () {
    return (
        <nav className="header">
            <div className="nav-logo">
                <img className="nav--logo-icon" src="../../images/troll-face.png" alt="" />
                Meme Generator
            </div>

            <p>
                React Project - Course 3
            </p>
        </nav>
    )
}

export default Header;