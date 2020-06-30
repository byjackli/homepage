import React from 'react';
// import { Tag } from '../components/Clicks';


// Card element, use when neccessary
export function Card({ header, elements, slots, ...rest }) {
    // function editCard(header, elements, slots) {
    // }
    // function saveCard(header, elements, slots) {
    // }

    return (
        <div className="card" {...rest}>
            <h3>{header}</h3>
            {elements}
            {slots ?
                <div className="card-vrt">
                    {slots.map(slot => (
                        <React.Fragment key={`${slot.props.line1}${slot.props.line2}${slot.props.header}`}>
                            {slot}
                        </React.Fragment>
                    ))}
                </div> : null
            }
        </div>
    )
}


// Slot element, use when neccessary
export function Slot({ href, content, ...rest }) {

    return (
        <div className="slot" {...rest}>
            {href ? <a href={href} >{href}</a> : null}
            <div className="slot-content hrzBT">
                {content ? content : null}
            </div>
        </div>
    );
}