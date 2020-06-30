import React from 'react';
import { Button } from '../components/Clicks';


export function Searchbar() {
    // function renderSearch(){
    //     // displays search suggestions
    // }

    return <input className="invalid fa-search" type="search" placeholder="&#xF002; Search byjackli" aria-label="Search byjackli" />;
}

export function Suggestbox() {
    return (
        <div className="suggestBox">
            <ol>
                <li><Button shape="box" color="fill" href="#" label="See All" className="type4" /></li>
                <li><Button shape="box" color="fill" href="#" label="Travel" className="type4" /></li>
                <li><Button shape="box" color="fill" href="#" label="Photos" className="type4" /></li>
                <li><Button shape="box" color="fill" href="#" label="Focus" className="type4" /></li>
                <li><Button shape="box" color="fill" href="#" label="Lyrics" className="type4" /></li>
                <li><Button shape="box" color="fill" href="#" label="Playlist" className="type4" /></li>
            </ol>
        </div>
    );
}