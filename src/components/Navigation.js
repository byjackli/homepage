import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Searchbar } from './Search';
import { BoxFill, PillFill } from './Clicks';


// Navigation bar, use this on hompage
export function Navbar(props) {
    // function toggleMenu() {
    //     return <Menubar />;
    // }

    return (
        <nav>
            <div className="top">
                <div className="left">
                    <Link to="#" aria-label="Menu"><i className="style3 fas fa-bars"></i></Link>
                    <Link className="style3" to="/">byjackli</Link>
                    <Searchbar />
                </div>
                <div>
                    <NavLink className="navlink" to="/resume"><div className="button-box-nofill">Resume</div></NavLink>
                    <NavLink className="navlink" to="/about"><div className="button-box-nofill">About</div></NavLink>
                    <NavLink className="navlink" to="/project"><div className="button-box-nofill">Projects</div></NavLink>
                    <NavLink className="navlink" to="/signin"><div className="button-box-nofill">Sign In</div></NavLink>
                    <PillFill label="Create Account" href="/signup" type="fill" />
                </div>
            </div>
            <div className="bottom">
                {props.message}
            </div>
        </nav>
    );
}


// Compact Navigation Bar, use this navigation bar on all project-specific pages
export function CompactNavbar(props) {
    return (
        <div className="compact-navbar" style={{ background: `linear-gradient(0deg, #00000040, #00000040), ${props.color}` }}>
            <div className="left">
                <Link to="#" aria-label="byjackli Menu"><i className="fas fa-bars"></i></Link>
                <Link to="/projects">explore more byjackli</Link>
            </div>
            <div>
                <Link to={`/project/${props.uri}`}>click to learn more about this project</Link>
            </div>
        </div>
    );
}


// Menu Bar, use this on homepage
export function Menubar(props) {
    function doNothing() {
        console.log("great");
    }
    return (
        <div className="menubar vrtTL" style={{ height: `calc(100% - ${props.height}px)` }}>
            <div className="top">
                <BoxFill href="#" label="close menu" type="fill" onClick={doNothing.bind()} />
                {props.categories}
            </div>
            <div className="bottom">
                <BoxFill href="#" label="sign out" type="fill" />
            </div>
        </div>
    );
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