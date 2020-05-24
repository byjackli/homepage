import React from 'react';
import { BoxFill } from '../components/Clicks';


export function Searchbar() {
    // function renderSearch(){
    //     // displays search suggestions
    // }

    return <input className="fa-search" type="search" placeholder="&#xF002; Search byjackli" aria-label="Search byjackli" />;
}

export function Suggestbox() {
    return (
        <div className="suggestBox">
            <ol>
                <li><BoxFill href="#" label="See All" type="fill" className="type4" /></li>
                <li><BoxFill href="#" label="Travel" type="fill" className="type4" /></li>
                <li><BoxFill href="#" label="Photos" type="fill" className="type4" /></li>
                <li><BoxFill href="#" label="Focus" type="fill" className="type4" /></li>
                <li><BoxFill href="#" label="Lyrics" type="fill" className="type4" /></li>
                <li><BoxFill href="#" label="Playlist" type="fill" className="type4" /></li>
            </ol>
        </div>
    );
}