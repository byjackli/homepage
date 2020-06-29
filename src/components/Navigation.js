import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Clicks';
import Logo from '../images/logo.png';


// Navigation bar, use this on hompage
export class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            opacity: 1,
        }
    }

    componentDidMount() {
        this.scrollHandler(window.location.pathname);
        if (window.location.pathname === "/project") { window.location.pathname = "/projects"; }
    }

    scrollHandler(data, event) {
        console.info("add", window.scrollY)

        if (data === "/" || window.location.href.includes("project/")) {
            if (window.innerHeight < window.scrollY) { this.setState({ opacity: 1 }); }
            else { this.setState({ opacity: 0 }); }

            window.addEventListener("scroll", this.updateHeight.bind(this));
        }

        else {
            console.info("this is an else", data)
            this.setState({ opacity: 1 });
        }
    }

    updateHeight(data) {
        if ((window.location.pathname === "/" || window.location.href.includes("project/")) && window.scrollY < window.innerHeight - 100) {
            this.setState({ opacity: 1 - (window.innerHeight - window.scrollY - 200) / (300) });
        }
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu });
        console.log("pressed")
    }
    render() {
        return (
            <>
                <nav style={{ opacity: this.state.opacity }} {...this.props}>
                    <div className="top">
                        <div className="left">
                            <button className="dragoff" aria-label="Menu" onClick={this.toggleMenu.bind(this)}>{
                                this.state.menu
                                    ? <i className="style3 fas fa-times"></i>
                                    : <i className="style3 fas fa-bars"></i>
                            }</button>
                            <a className="style3 dragoff" onClick={this.scrollHandler.bind(this, "/")} href="/">byjackli</a>

                        </div>
                        <div>
                            <a className="navlink dragoff" onClick={this.scrollHandler.bind(this, "/resume")} href="/resume"><div className="button-box-nofill">Resume</div></a>
                            <a className="navlink dragoff" onClick={this.scrollHandler.bind(this, "/about")} href="/about"><div className="button-box-nofill">About</div></a>
                            <a className="navlink dragoff" onClick={this.scrollHandler.bind(this, "/projects")} href="/projects"><div className="button-box-nofill">Projects</div></a>
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
        <div aria-haspopup="menu" role="menu" className="menubar vrtTL">
            <div className="top">
                <div className="categories">
                    <p>Greetings and Good {greetings()}!</p>
                    <ol role="group" aria-label="pages">
                        <li>Jack</li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/resume" label="Resume" type="nofill" className="type4" /></li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/about" label="About" type="nofill" className="type4" /></li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/projects" label="Projects" type="nofill" className="type4" /></li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/about" label="Contact" type="nofill" className="type4" /></li>
                    </ol>
                    <ol role="group" aria-label="projects">
                        <li>Projects</li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/projects" label="See All" type="nofill" className="type4" /></li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/project/lyrics" label="Lyrics" type="nofill" className="type4" /></li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/project/pages" label="Pages" type="nofill" className="type4" /></li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/project/topix" label="Topix" type="nofill" className="type4" /></li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/project/travel" label="Travel" type="nofill" className="type4" /></li>
                        <li><Button role="menuitem" shape="box" color="nofill" href="/project/playlist" label="Playlist" type="nofill" className="type4" /></li>
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
                <p>DARE TO IMAGINE.</p>
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
                    <li><a href="/project/lyrics">Lyrics - music and lyrics side-by-side</a></li>
                    <li><a href="/project/pages">Pages - simple website builder</a></li>
                    <li><a href="/project/focus">Topix - academic sharing platform</a></li>
                    <li><a href="/project/travel">Travel - help travelers make decisions</a></li>
                    <li><a href="/project/playlists">Playlists - share your spotify playlists</a></li>
                </ol>
            </div>
        </footer>
    );
}