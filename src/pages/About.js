import React, { Component } from 'react';
import { Card } from '../components/Nodes';
import { Intext } from '../components/Clicks';

class About extends Component {

    render() {
        return (
            <main className="about vrtTL">
                <section>
                    <div className="pageheader">
                        <h1>About Jack</h1>
                    </div>
                    <div className="hrzBT">
                        <Card className="card" header="Core" elements={
                            <div>

                                <p>Truth be told, sometimes Jack needs to pick one and only one project and see it through.</p>
                                <p>His strong passion for creating combined with his explosive imagination keeps him on his toes; moving from one project to the next.</p>
                                <p>To make things worse, Jack is easily inspired by his environment - ranging from YouTube videos, to the way leaves fall from trees, to the organized chaotic rupture of glass.</p>
                                <p>
                                    Some say all this organized mess is the result of starting things at the wrong time.
                                    If what they say is true, then it is with relief that Jack logs all of his past, current, and future goals and plans.
                                    When the right time and place aligns, those projects will breathe new and refreshing life - probably the biggest glow-up you'll see.
                                </p>
                            </div>
                        }
                            style={{ width: "100%" }} />
                    </div>
                    <div className="cards-3 hrzBT">
                        <Card className="card" header="Contact" elements={
                            <div>
                                <div className="hrzTL">
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
                                <div className="hrzTL">
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
                                <div className="hrzTL">
                                    <ol>
                                        <li><i className="fas fa-map-marker-alt"></i> Quarantined Home</li>
                                        <li><i className="fas fa-home"></i> New York, NY</li>
                                        <li><i className="fas fa-graduation-cap"></i> Buffalo, NY</li>
                                    </ol>
                                </div>
                            </div>
                        } />
                    </div>
                </section>
            </main>
        );
    }
}

export default About;