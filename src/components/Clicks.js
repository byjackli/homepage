import React from 'react';
import { Link } from 'react-router-dom';


// Button -- Box Styled, Colored
export function BoxFill(props) {
    return <a className="button-box-fill" href={props.href} >{props.label}</a>;
}


// Button -- Pill Styled, Colored
export function PillFill(props) {
    return <a className="button-pill-fill" href={props.href}>{props.label}</a>;
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
            <i class="sup fas fa-external-link-square-alt"></i>
        </a>
    );
}