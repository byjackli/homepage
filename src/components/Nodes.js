import React from 'react';
import { Link } from 'react-router-dom';


// Card element, use when neccessary
export function Card({ header, elements, slots, ...rest }) {
    function editCard(header, elements, slots) {
    }
    function saveCard(header, elements, slots) {
    }

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
export function Slot(props) {

    function renderTags() {
        if (props.tags) {
            return (
                <div className="hrzTL tagList">
                    {props.tags.map(tag => (
                        <Link className="tag" key={tag} to={`/tag/${tag}`}>#{tag}</Link>
                    ))}
                </div>
            )
        }
        else {
            return <div className="hrzTL"></div>;
        }
    }
    function renderBG() {
        if (props.image) {
            return <div className="slot-bg" style={{
                backgroundImage: `linear-gradient(0deg, #FFFFFFBF, #FFFFFFBF), url(${props.image})`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`
            }}></div>;
        }
        else if (props.color) {
            return <div className="slot-bg" style={{ backgroundColor: props.color }}></div>;
        }
        else {
            // HSL (Hue, Saturation, Lightness) 
            // Randomize the Hue of hsl(0, 50%, 75%)

            let color = `hsl(${Math.floor(Math.random() * 360)}, 50%, 75%)`;
            return <div className="slot-bg" style={{ backgroundColor: color }}></div>;
        }
    }

    return (
        <div className="slot">
            {props.href ? <a href={props.href} >{props.href}</a> : null}
            <div className="hrzTL">
                <div className="slot-time">
                    <p>{props.line1}</p>
                    <p className="style4">{props.line2}</p>
                </div>
                <h4>{props.header}</h4>
            </div>
            {renderTags()}
            {renderBG()}
        </div>
    );
}