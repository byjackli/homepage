import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Card, Slot } from '../components/Nodes';
import { Intext } from '../components/Clicks';

class About extends Component {

    render() {
        return (
            <main className="about vrtTL">
                <div className="pageheader">
                    <h1>About</h1>
                </div>
                <div className="hrzTL">
                    <div className="left">
                        <h2 className="style3">Table of Contents</h2>
                        <ol>
                            <li>1. <Intext href="#early-life" label="Early Life" /></li>
                            <li>2. <Intext href="#career" label="Career" /></li>
                            <li>3. <Intext href="#personal-life" label="Personal Life" /></li>
                            <li>4. <Intext href="#influences" label="Influences" /></li>
                        </ol>
                    </div>
                    <div className="middle">
                        <section>
                            <p>
                                Jack Li is a Computer Science and Communications student at <Intext href="http://engineering.buffalo.edu/" label="University at Buffalo's School of Engineering and Applied Sciences" />,
                                media marketing director at <Intext href="https://www.sa.buffalo.edu/" label="University at Buffalo Student Association" />, and founder at <Intext href="https://www.ubphotoclub.org/" label="UB Photo Club" />.
                                He began web developing in New York City during the early-2010's, and attained transformative knowledge during the late-2010's at University at Buffalo. He
                                is know for his creative eye for photography and front-end web development. He is sometimes regarded as the "wizard" of photography and web development.
                            </p>
                        </section>
                        <section>
                            <h2>Early Life</h2>
                            <p>[ -redacted- ]</p>
                        </section>
                        <section>
                            <h2>Career</h2>
                            <p>[ -redacted- ]</p>
                        </section>
                        <section>
                            <h2>Personal Life</h2>
                            <p>[ -redacted- ]</p>
                        </section>
                        <section>
                            <h2>Influences</h2>
                            <p>[ -redacted- ]</p>
                        </section>
                    </div>
                    <div className="right">
                        <Card className="card" header="Contact" elements={
                            <div>
                                <div className="vrtTL">
                                    <ol>
                                        <li><i className="fas fa-phone"></i> (347) 476 - 4944</li>
                                        <li><i className="fas fa-envelope"></i> jackli@buffalo.edu</li>
                                        <li><i className="fas fa-envelope"></i> mail@byjackli.com</li>
                                    </ol>
                                    <ol>
                                        <li><i className="fab fa-linkedin"></i> <Intext href="https://www.linkedin.com/in/byjackli/" label="LinkedIn" /></li>
                                        <li><i className="fab fa-github"></i> <Intext href="https://github.com/byjackli/" label="Github" /></li>
                                        <li><i className="fab fa-twitter"></i> <Intext href="https://twitter.com/byjackli" label="Twitter" /></li>
                                    </ol>
                                </div>
                            </div>
                        } />
                        <Card className="card" header="Social Media" elements={
                            <div>
                                <p>Feel free to reach out and connect with me, socially!</p>
                                <div className="vrtTL">
                                    <ol>
                                        <li><i className="fab fa-instagram"></i> <Intext href="https://www.instagram.com/byjackli/" label="Instagram" /></li>
                                        <li><i className="fab fa-pinterest"></i> <Intext href="https://www.pinterest.com/byjackli/" label="Pinterest" /></li>
                                    </ol>
                                    <ol>
                                        <li><i className="fab fa-spotify"></i> <Intext href="https://open.spotify.com/user/primeno17?si=qymzYYxATCmN-SRbfeJdnA" label="Spotify" /></li>
                                        <li><i className="fab fa-facebook"></i> <Intext href="https://www.facebook.com/byjackli/" label="Facebook" /></li>
                                    </ol>
                                    <ol>
                                        <li><i className="fab fa-youtube"></i> <Intext href="https://www.youtube.com/wizardjack/" label="YouTube" /></li>
                                    </ol>
                                </div>
                            </div>
                        } />
                        <Card className="card" header="Location" elements={
                            <div>
                                <div className="vrtTL">
                                    <ol>
                                        <li><i className="fas fa-map-marker-alt"></i> Currently home. New York, NY</li>
                                        <li><i className="fas fa-home"></i> New York, NY</li>
                                        <li><i className="fas fa-graduation-cap"></i> Buffalo, NY</li>
                                    </ol>
                                </div>
                            </div>
                        } />
                    </div>
                </div>

            </main>
        );
    }
}

export default About;