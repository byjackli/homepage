import React from 'react';
import { Link } from 'react-router-dom';


// Card element, use when neccessary
export function Card({ header, elements, ...rest }) {
    return (
        <div {...rest}>
            <h3>{header}</h3>
            <div>
                {elements}
            </div>
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
                        <Link className="tag" key={tag} to={`/${tag}`}>#{tag}</Link>
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
        else {
            // HSL (Hue, Saturation, Lightness) 
            // Randomize the Hue of hsl(0, 50%, 75%)

            let color = `hsl(${Math.floor(Math.random() * 360)}, 50%, 75%)`;
            return <div className="slot-bg" style={{ backgroundColor: color }}></div>;
        }
    }

    return (
        <div className="slot">
            <a href={props.href} >{props.href}</a>
            <div className="hrzTL">
                <div className="slot-time">
                    <p>{props.month}</p>
                    <p className="style4">{props.date}</p>
                </div>
                <h4>{props.header}</h4>
            </div>
            {renderTags()}
            {renderBG()}
        </div>
    );
}