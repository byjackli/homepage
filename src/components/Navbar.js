import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Menubar from '../components/Menubar';
import Searchbar from '../components/Searchbar';

function Navbar() {

    // function toggleMenu() {
    //     return <Menubar />;
    // }

    return (
        <nav>
            <div className="left">
                <Link to="#"><i class="fas fa-bars"></i></Link>
                <Link to="/">byjackli</Link>
                <Searchbar />
            </div>
            <div>
                <NavLink to="/Resume">Resume</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/SignIn">Sign In</NavLink>
                <button className="button-pill-fill">Create Account</button>
            </div>
        </nav>
    );
}

export default Navbar;