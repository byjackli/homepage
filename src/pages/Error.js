import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Card, Slot } from '../components/Nodes';
import { Intext } from '../components/Clicks';
import Logo from '../images/logo.png';
import Wideboy from '../images/wideboy.jpg';

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    };

    render() {
        console.log("address", window.location.pathname);
        return (
            <main className="error">
                <section className="vrtCC">
                    <div>

                        <h1 className="style-mega">Error</h1>
                        <p className="style3">Page not Found! <span style={{ fontSize: "inherit" }}>Maybe there was a typo?</span></p>
                    </div>
                </section>
            </main>
        );
    };
}

export default Error;