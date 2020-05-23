import React from 'react';
import { Navbar, CompactNavbar, Menubar, Footer } from '../components/Navigation';
import { Searchbar } from '../components/Search';
import { Card, Slot } from '../components/Nodes';
import { BoxFill, PillFill, Intext } from '../components/Clicks';


function Styleguide() {
    return (
        <main className="styleguide">
            <h1>Styleguide</h1>
            <section className="navigation">
                <h2>Navigation</h2>
                <Navbar />
                <CompactNavbar color="#B42637" />
                <Menubar
                    height={75}
                    categories={
                        <div className="categories">
                            <p>Good Morning Tony Stark!</p>
                            <ol>
                                <li>Jack</li>
                                <li><BoxFill href="#" label="Resume" type="nofill" className="type4" /></li>
                                <li><BoxFill href="#" label="About" type="nofill" className="type4" /></li>
                                <li><BoxFill href="#" label="Contact" type="nofill" className="type4" /></li>
                            </ol>
                            <ol>
                                <li>Projects</li>
                                <li><BoxFill href="#" label="See All" type="nofill" className="type4" /></li>
                                <li><BoxFill href="#" label="Travel" type="nofill" className="type4" /></li>
                                <li><BoxFill href="#" label="Photos" type="nofill" className="type4" /></li>
                                <li><BoxFill href="#" label="Focus" type="nofill" className="type4" /></li>
                                <li><BoxFill href="#" label="Lyrics" type="nofill" className="type4" /></li>
                                <li><BoxFill href="#" label="Playlist" type="nofill" className="type4" /></li>
                            </ol>
                            <ol>
                                <li>Account</li>
                                <li><BoxFill href="#" label="Profile" type="nofill" className="type4" /></li>
                                <li><BoxFill href="#" label="Language" type="nofill" className="type4" /></li>
                                <li><BoxFill href="#" label="Country" type="nofill" className="type4" /></li>
                            </ol>
                        </div>
                    }
                />
                <Searchbar />
                <Footer right={
                    <div className="hrzTL">
                        <ol>
                            <li className="style5">Contact</li>
                            <li> 347 476 - 4944 </li>
                            <li> jackli@buffalo.edu </li>
                            <li> email@byjackli.com </li>
                        </ol>
                        <ol>
                            <li className="style5">Proudly built with</li>
                            <li> Javascript </li>
                            <li> Nodejs </li>
                            <li> Reactjs </li>
                            <li> Visual Studios Code </li>
                            <li> Firebase </li>
                        </ol>
                        <ol>
                            <li className="style5">Other projects</li>
                            <li></li>
                        </ol>
                    </div>
                } />
            </section>
            <section className="typography">
                <h2>Typography</h2>
            </section>
            <section>
                <h2>Color Palette</h2>
            </section>
            <section className="buttons-and-links">
                <h2>Buttons and Links</h2>
                <BoxFill href="/styleguide" label="box fill" type="fill" />
                <BoxFill href="/styleguide" label="box nofill" type="nofill" />
                <PillFill href="/styleguide" label="pill fill" type="fill" />
                <PillFill href="/styleguide" label="pill nofill" type="nofill" />
                <Intext href="/styleguide" label="in-text and internal" />
                <Intext href="https://www.instagram.com/byjackli" label="external" />
                <Intext href="https://www.instagram.com/byjackli" label="new tab" target="_blank" />
            </section>
            <section className="cards-and-slots">
                <h2>Cards and Slots</h2>
                <Card className="card" header="Card with Text" elements={
                    <div>
                        <p>temporary text</p>
                    </div>} />
                <Card className="card" header="Card with Slots" elements={
                    <div className="card-cap">
                        <Slot month="September" date="22" header="background image" image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/70515020_421309365191643_6585258917258799635_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Zolkr2asqEEAX-A_w3N&oh=26584734bf49b0404bc4115dd3a9d89e&oe=5EF10579" />
                        <Slot month="May" date="4" header="no background image" />
                        <Slot month="July" date="11" header="background image" image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/62054280_837856996600363_8628047517587627838_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=uOIFhXKuPo4AX-o6lwg&oh=c0577da8f21509d64e81733abdf82b0c&oe=5EF183EB" tags={["boat", "car", "train"]} />
                    </div>} />
                <Slot month="September" date="22" header="no background image" />
                <Slot month="May" date="22" header="background image" image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/62054280_837856996600363_8628047517587627838_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=uOIFhXKuPo4AX-o6lwg&oh=c0577da8f21509d64e81733abdf82b0c&oe=5EF183EB" tags={["boat", "car", "train"]} />
            </section>
        </main>
    )
}

export default Styleguide;