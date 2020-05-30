import React, { Component } from 'react';
import { Navbar, CompactNavbar, Menubar, Footer } from '../components/Navigation';
import { Searchbar, Suggestbox } from '../components/Search';
import { Card, Slot } from '../components/Nodes';
import { BoxFill, PillFill, Intext } from '../components/Clicks';


class Styleguide extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <main className="styleguide">
                <h1>Styleguide</h1>
                <section className="navigation">
                    <h2>Navigation</h2>
                    <Navbar message={<p><span className="style5">Test:</span> This is a test message!</p>} />
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
                    <Suggestbox />
                    <Footer right={[
                        <ol>
                            <li className="style5">Contact</li>
                            <li> 347 476 - 4944 </li>
                            <li> jackli@buffalo.edu </li>
                            <li> email@byjackli.com </li>
                        </ol>,
                        <ol>
                            <li className="style5">Proudly built with</li>
                            <li> Javascript </li>
                            <li> Nodejs </li>
                            <li> Reactjs </li>
                            <li> Visual Studios Code </li>
                            <li> Firebase </li>
                        </ol>,
                        <ol>
                            <li className="style5">Other projects</li>
                            <li></li>
                        </ol>
                    ]} />
                </section>
                <section className="typography">
                    <h2>Typography</h2>
                    <div>
                        <h1>h1 and style1</h1>
                        <p>family:Roboto, size:325%, weight:600</p>
                    </div>
                    <div>
                        <h2>h2 and style2</h2>
                        <p>family:Roboto, size:275%, weight:600</p>
                    </div>
                    <div>
                        <h3>h3 and style3</h3>
                        <p>family:Roboto, size:200%, weight:600</p>
                    </div>
                    <div>
                        <h4>h4 and style4</h4>
                        <p>family:Roboto, size:125%, weight:600</p>
                    </div>
                    <div>
                        <h5>h5 and style5</h5>
                        <p>family:Roboto, size:100%, weight:600</p>
                    </div>
                    <div>
                        <p>default text</p>
                        <p>family:Roboto, size:18px, weight:400</p>
                    </div>
                </section>
                <section>
                    <h2>Color Palette</h2>
                    <div>
                        <div className="colorbox" style={{ backgroundColor: "var(--BrandL)" }}></div>
                        <p>Apple Red byjackli, var(--BrandL)</p>
                        <p>Brand identity color suitable for background, header text, and error messages.</p>
                    </div>
                    <div>
                        <div className="colorbox" style={{ backgroundColor: "var(--BrandS)" }}></div>
                        <p>Apple Red byjackli, var(--BrandS)</p>
                        <p>Suitable for in-text link decoration and inactive inpit fields.</p>
                    </div>
                    <div>
                        <div className="colorbox" style={{ backgroundColor: "var(--DarkL)" }}></div>
                        <p>Skid Black byjackli, var(--DarkL)</p>
                        <p>Suitable for any text and backgrounds. This is the default 'dark-mode'.</p>
                    </div>
                    <div>
                        <div className="colorbox" style={{ backgroundColor: "var(--DarkM)" }}></div>
                        <p>Dark Black byjackli, var(--DarkM)</p>
                        <p>Suitable for overalys, tagged texts, drop shadows, help messages, and error messages.</p>
                    </div>
                    <div>
                        <div className="colorbox" style={{ backgroundColor: "var(--DarkS)" }}></div>
                        <p>Dark Black byjackli, var(--DarkS)</p>
                        <p>Suitable for card and block drop shadows.</p>
                    </div>
                    <div>
                        <div className="colorbox" style={{ backgroundColor: "var(--LightL)" }}></div>
                        <p>Paper White byjackli, var(--LightL)</p>
                        <p>Suitable for any text and backgrounds. This is the default 'light-mode' color.</p>
                    </div>
                    <div>
                        <div className="colorbox" style={{ backgroundColor: "var(--LightM)" }}></div>
                        <p>Clean White byjackli, var(--LightM)</p>
                        <p>Suitable for card and block backgrounds.</p>
                    </div>
                    <div>
                        <div className="colorbox" style={{ backgroundColor: "var(--LightS)" }}></div>
                        <p>Clean White byjackli, var(--LightS)</p>
                        <p>Suitable for overlays.</p>
                    </div>
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
                    <Card header="Card with Text" elements={
                        <div>
                            <p>temporary text</p>
                        </div>} />
                    <Card header="Card with Slots" slots={
                        [
                            <Slot href="#" line1="September" line2="22" header="background image" image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/70515020_421309365191643_6585258917258799635_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Zolkr2asqEEAX-A_w3N&oh=26584734bf49b0404bc4115dd3a9d89e&oe=5EF10579" />,
                            <Slot href="#" line1="May" line2="4" header="no background image" />,
                            <Slot href="#" line1="July" line2="11" header="background image" image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/62054280_837856996600363_8628047517587627838_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=uOIFhXKuPo4AX-o6lwg&oh=c0577da8f21509d64e81733abdf82b0c&oe=5EF183EB" tags={["boat", "car", "train"]} />
                        ]
                    } />
                    <Slot href="#" line1="September" line2="22" header="no background image" />
                    <Slot href="#" line1="May" line2="22" header="background image" image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/62054280_837856996600363_8628047517587627838_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=uOIFhXKuPo4AX-o6lwg&oh=c0577da8f21509d64e81733abdf82b0c&oe=5EF183EB" tags={["boat", "car", "train"]} />
                </section>
            </main>
        )
    }
}

export default Styleguide;