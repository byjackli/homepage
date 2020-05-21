import React from 'react';
import { Link } from 'react-router-dom';

function Slot(props) {

    function renderTags() {
        if (props.tags) {
            return (
                <div className="hrzTL">
                    {props.tags.map(tag => (
                        <Link className="tag" to={`/${tag}`}>#{tag}</Link>
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
            <div className="hrzTL">
                <div className="slot-time">
                    <p className="slot-mm">{props.month}</p>
                    <p className="slot-dd">{props.date}</p>
                </div>
                <h4>{props.header}</h4>
            </div>
            {renderTags()}
            {renderBG()}
        </div>
    );
}

export default Slot;