// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
    return (
        <nav className="nav">
            <h1 className="title">Download.<span className="title-num">4</span>U</h1>
            <div className="links">
                <Link className="link1" to="/youtube">YouTube video Downloader</Link>
                <Link className="link2" to="/instagram">Instagram video Downloader</Link>
                <Link className="link3" to="/facebook">Facebook video Downloader</Link>
            </div>
        </nav>
    );
};

export default Nav;
