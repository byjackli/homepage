import React, { Component } from 'react';
import Logo from '../images/logo.png';

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
                    <div className="vrtTL">
                        <h1 className="style-mega">Error</h1>
                        <p className="style3">Page not Found! <span style={{ fontSize: "inherit" }}>Maybe there was a typo?</span></p>
                        <hr></hr>
                        <div className="logo-container dragoff">
                            <p className="style4 dragoff hrzCC"><img className="logo-homepage dragoff" src={Logo} alt="by jack li logo, letter J and L" style={{ width: "2em" }} /> DARE TO IMAGINE.</p>
                        </div>
                    </div>
                </section>
            </main>
        );
    };
}

export default Error;