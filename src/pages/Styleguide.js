import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Minibar from '../components/Minibar';
import Menubar from '../components/Menubar';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Slot from '../components/Slot';

function Styleguide() {
    return (
        <main className="styleguide">
            <h1>Styleguide</h1>
            <section>
                <h2>Navigation</h2>
                <Navbar />
                <Minibar />
                <Menubar />
                <Searchbar />
                <Footer />
            </section>
            <section>
                <h2>Typography</h2>
            </section>
            <section>
                <h2>Color Palette</h2>
            </section>
            <section>
                <h2>Buttons and Links</h2>
                <button className="button-box-fill">box button</button>
                <button className="button-pill-fill">pill button</button>
                <Link to="#"><i class="fas fa-link"></i><span>in-text link</span></Link>
            </section>
            <section>
                <h2>Cards and Slots</h2>
                <Card class="card" header="Contact" elements={
                    <div>
                        <p>temporary text</p>
                    </div>} />
                <Slot />
            </section>
        </main>
    )
}

export default Styleguide;