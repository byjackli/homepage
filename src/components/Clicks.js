import React from 'react';
import { Link } from 'react-router-dom';


// Button -- Box Styled, Colored
export function BoxFill({ label, type, ...rest }) {
    return <a className="button-root" {...rest}><div className={`button-box-${type}`}>{label}</div></a>;
}


// Button -- Pill Styled, Colored
export function PillFill({ label, type, ...rest }) {
    return <a className="button-root" {...rest}><div className={`button-pill-${type}`}>{label}</div></a>;
}


// Link -- In-Text, Highlighted
export function Intext(props) {
    if (props.href.startsWith("/") || props.href.startsWith(".")) {
        return (
            <Link className="intext" to={props.href} target={props.target}>
                {props.label}
            </Link>
        );
    }

    return (
        <a className="intext" href={props.href} target={props.target}>
            {props.label}
            <i className="sup fas fa-external-link-square-alt"></i>
        </a>
    );
}

export function Tag(props) {
    return (
        <Link className="tag" key={props.tag} to={`/tag/${props.tag}`}>#{props.tag}</Link>
    )
}