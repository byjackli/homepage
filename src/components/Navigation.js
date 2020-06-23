import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Searchbar } from './Search';
import { Button } from './Clicks';


// Navigation bar, use this on hompage
export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu });
        console.log("pressed")
    }
    render() {
        return (
            <>
                <nav {...this.props}>
                    <div className="top">
                        <div className="left">
                            <Link to="#" aria-label="Menu" onClick={this.toggleMenu.bind(this)}><i className="style3 fas fa-bars"></i></Link>
                            <Link className="style3" to="/">byjackli</Link>
                        </div>
                        <div>
                            <NavLink className="navlink" to="/resume"><div className="button-box-nofill">Resume</div></NavLink>
                            <NavLink className="navlink" to="/about"><div className="button-box-nofill">About</div></NavLink>
                            <NavLink className="navlink" to="/project"><div className="button-box-nofill">Projects</div></NavLink>
                        </div>
                    </div>
                    <div className="bottom">
                        {this.props.message}
                    </div>
                </nav>
                {this.state.menu && (
                    <>
                        <Menubar toggleMenu={this.toggleMenu.bind(this)} />
                        <div className="modalbg" onClick={this.toggleMenu.bind(this)}></div>
                    </>
                )}
            </>
        );
    }
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

    function greetings() {
        let date = new Date(), time = date.getHours() * 100 + date.getMinutes();
        if (559 < time && time < 1200) { return `Morning`; }
        else if (1200 < time && time < 1700) { return `Afternoon`; }
        else if (1700 < time && time < 2001) { return `Evening`; }
        else { return `Night`; }
    }

    return (
        <div className="menubar vrtTL">
            <div className="top">
                <div className="categories">
                    <p>Greetings and Good {greetings()}!</p>
                    <ol>
                        <li>Jack</li>
                        <li><Button shape="box" color="nofill" href="/resume" label="Resume" type="nofill" className="type4" /></li>
                        <li><Button shape="box" color="nofill" href="/about" label="About" type="nofill" className="type4" /></li>
                        <li><Button shape="box" color="nofill" href="/about" label="Contact" type="nofill" className="type4" /></li>
                    </ol>
                    <ol>
                        <li>Projects</li>
                        <li><Button shape="box" color="nofill" href="/project" label="See All" type="nofill" className="type4" /></li>
                        <li><Button shape="box" color="nofill" href="/project/travel" label="Travel" type="nofill" className="type4" /></li>
                        <li><Button shape="box" color="nofill" href="/project/photos" label="Photos" type="nofill" className="type4" /></li>
                        <li><Button shape="box" color="nofill" href="/project/focus" label="Focus" type="nofill" className="type4" /></li>
                        <li><Button shape="box" color="nofill" href="/project/lyrics" label="Lyrics" type="nofill" className="type4" /></li>
                        <li><Button shape="box" color="nofill" href="/project/playlist" label="Playlist" type="nofill" className="type4" /></li>
                    </ol>
                </div>
            </div>
            <div className="bottom">
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
            <div className="hrzTL">

                <ol>
                    <li className="style5">Contact</li>
                    <li>347 476 - 4944</li>
                    <li>jackli@buffalo.edu</li>
                    <li>email@byjackli.com</li>
                </ol>
                <ol>
                    <li className="style5">Proudly built with</li>
                    <li>- Javascript</li>
                    <li>- Reactjs</li>
                    <li>- Visual Studio Code</li>
                    <li>- Firebase</li>
                </ol>
                <ol>
                    <li className="style5">Other projects</li>
                    <li><a href="/project/travel">Travel - help travelers make decisions</a></li>
                    <li><a href="/project/photos">Photos - immersive instagram experience</a></li>
                    <li><a href="/project/focus">Focus - chrome extensions to improve focus</a></li>
                    <li><a href="/project/lyrics">Lyrics - music and lyrics side-by-side</a></li>
                    <li><a href="/project/playlists">Playlists - share your spotify playlists</a></li>
                </ol>
            </div>
        </footer>
    );
}