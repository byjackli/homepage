import React from 'react';
import { Link } from 'react-router-dom';

// Compact Navigation Bar, use this navigation bar on all project-specific pages
export function CompactNavbar(props) {
    return (
        <div className="compact-navbar" style={{background: `linear-gradient(0deg, #00000040, #00000040), ${props.color}`}}>
            <div className="left">
                <Link to="#" aria-label="byjackli Menu"><i class="fas fa-bars"></i></Link>
                <Link to="/projects">explore more byjackli</Link>
            </div>
            <div>
                <Link to={`/project/${props.uri}`}>click to learn more about this project</Link>
            </div>
        </div>
    );
}

// Compact Menu Bar, use this menu bar on all project-specific pages
export function CompactMenubar() {
    return null;
}