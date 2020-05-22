import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {

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

export default Footer;