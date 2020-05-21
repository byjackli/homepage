import React from 'react';

function Card(props) {

    return (
        <div className={props.class}>
            <h3>{props.header}</h3>
            <div>
                {props.elements}
            </div>
        </div>
    )
}

export default Card;