import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Searchbar } from './Search';
import { PillFill } from './Clicks';


// Navigation bar, use this on hompage
export function Navbar() {
    // function toggleMenu() {
    //     return <Menubar />;
    // }

    return (
        <nav>
            <div className="left">
                <Link to="#" aria-label="Menu"><i className="style3 fas fa-bars"></i></Link>
                <Link className="style3" to="/">byjackli</Link>
                <Searchbar />
            </div>
            <div>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/signIn">Sign In</NavLink>
                <PillFill label="Create Account" action="window.location.href=`https://www.instagram.com/byjackli`"/>
            </div>
        </nav>
    );
}


// Menu Bar, use this on homepage
export function Menubar() {
    return null;
}


// Footer, use this on all byjackli related pages
export function Footer(props) {
    return (
        <footer className="hrzTL">
            <div className="left">
                <Link className="style3" to="/">byjackli</Link>
                <p>if you can't make sacrifices, then you need a new goal</p>
            </div>
            {props.right}
        </footer>
    );
}