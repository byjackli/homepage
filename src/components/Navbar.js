import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// import Menubar from '../components/Menubar';
import Searchbar from '../components/Searchbar';

function Navbar() {

    // function toggleMenu() {
    //     return <Menubar />;
    // }

    return (
        <nav>
            <div className="left">
                <Link to="#"><i className="style3 fas fa-bars"></i></Link>
                <Link className="style3" to="/">byjackli</Link>
                <Searchbar />
            </div>
            <div>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/signIn">Sign In</NavLink>
                <button className="button-pill-fill">Create Account</button>
            </div>
        </nav>
    );
}

export default Navbar;