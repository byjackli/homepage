import React from 'react';
import { Link } from 'react-router-dom';

function CompactNavbar(props) {

    return (
        <div className="compact-navbar" style={{background: `linear-gradient(0deg, #00000040, #00000040), ${props.color}`}}>
            <div className="left">
                <Link to="#"><i class="fas fa-bars"></i></Link>
                <Link to="/projects">explore more byjackli</Link>
            </div>
            <div>
                <Link to={`/project/${props.uri}`}>click to learn more about this project</Link>
            </div>
        </div>
    );
}

export default CompactNavbar;