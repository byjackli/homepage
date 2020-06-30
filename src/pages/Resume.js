import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Card, Slot } from '../components/Nodes';
import { Intext } from '../components/Clicks';
import Logo from '../images/logo.png';
import Wideboy from '../images/wideboy.jpg';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: null,
            user_courses: null,
            agendas: null,
            projects: null,
            resume: true
        }
    }
    componentDidMount() {
        this.getData();
    };

    getData() {
        const db = firebase.firestore();
        // get courses
        db.collection('courses').get().then(snapshotCourses => {
            let allCourses = new Map();
            snapshotCourses.docs.forEach(doc => {
                allCourses.set(doc.id, doc.data());
            })

            // get agendas
            db.collection('agendas').orderBy('date').orderBy('name').orderBy('status').get().then(snapshotAgendas => {

                // get user courses
                db.collection('users-courses').orderBy('year', 'desc').orderBy('term').orderBy('course').get().then(snapshotUserCourses => {

                    // get projects
                    db.collection('projects').orderBy('start-date', 'desc').orderBy('name').orderBy('status').get().then(snapshotProjects => {
                        this.setState({
                            agendas: snapshotAgendas.docs,
                            user_courses: snapshotUserCourses.docs,
                            projects: snapshotProjects.docs,
                            courses: allCourses
                        });
                    });
                });
            });
        });
    }

    renderDate(data) {
        let
            date = new Date(data * 1000),
            months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];

        console.log("the date", data);
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    renderCards(cards, cb) {
        return (
            <>{
                cards.map(doc => (
                    <Card
                        header={doc.data().header}
                        elements={doc.data().elements}
                        slots={cb}
                    />
                ))
            }</>
        )
    };
    renderSlots(slots, cb) {
        return (
            <>{
                slots.map(doc => (
                    cb(doc)
                ))
            }</>
        )
    }
    renderResume() {
        return (
            <section className="resume">
                <div className="cards-3 hrzBT">
                    <Card className="card" header="Contact" elements={
                        <div>
                            <div className="hrzTL">
                                <ol>
                                    <li><i className="fas fa-phone"></i> (347) 476 - 4944</li>
                                    <li><i className="fas fa-envelope"></i> jackli@buffalo.edu</li>
                                    <li><i className="fas fa-envelope"></i> mail@byjackli.com</li>
                                </ol>
                                <ol>
                                    <li><i className="fab fa-linkedin"></i> <Intext href="https://www.linkedin.com/in/byjackli/" label="LinkedIn" /></li>
                                    <li><i className="fab fa-github"></i> <Intext href="https://github.com/byjackli/" label="Github" /></li>
                                    <li><i className="fab fa-twitter"></i> <Intext href="https://twitter.com/byjackli" label="Twitter" /></li>
                                </ol>
                            </div>
                        </div>
                    } />
                    <Card className="card" header="Social Media" elements={
                        <div>
                            <p>Feel free to reach out and connect with me, socially!</p>
                            <div className="hrzTL">
                                <ol>
                                    <li><i className="fab fa-instagram"></i> <Intext href="https://www.instagram.com/byjackli/" label="Instagram" /></li>
                                    <li><i className="fab fa-pinterest"></i> <Intext href="https://www.pinterest.com/byjackli/" label="Pinterest" /></li>
                                </ol>
                                <ol>
                                    <li><i className="fab fa-spotify"></i> <Intext href="https://open.spotify.com/user/primeno17?si=qymzYYxATCmN-SRbfeJdnA" label="Spotify" /></li>
                                    <li><i className="fab fa-facebook"></i> <Intext href="https://www.facebook.com/byjackli/" label="Facebook" /></li>
                                </ol>
                                <ol>
                                    <li><i className="fab fa-youtube"></i> <Intext href="https://www.youtube.com/wizardjack/" label="YouTube" /></li>
                                </ol>
                            </div>
                        </div>
                    } />
                    <Card className="card" header="Location" elements={
                        <div>
                            <div className="hrzTL">
                                <ol>
                                    <li><i className="fas fa-map-marker-alt"></i> Quarantined Home</li>
                                    <li><i className="fas fa-home"></i> New York, NY</li>
                                    <li><i className="fas fa-graduation-cap"></i> Buffalo, NY</li>
                                </ol>
                            </div>
                        </div>
                    } />
                </div>

                <div className="hrzBT">
                    <Card className="card" header="Expertises" elements={
                        <div>
                            <p>Imposter Syndrome is a psychological pattern in which one doubts one's accomplishments and has a persistent internalized fear of being exposed as a "fraud". <Intext href="https://paulineroseclance.com/pdf/-Langford.pdf" label="[source]" /></p>
                            <div className="hrzTL bucketlist">
                                <ol>
                                    <li><h4>Programming</h4></li>
                                    <li>- programming languages</li>
                                    <li>- interpreting documentation</li>
                                    <li>- web security</li>
                                    <li>- data structures and algorithms</li>
                                    <li>- scrumb board and planning</li>
                                    <li>- using git and git managers</li>
                                    <li>- using package managers</li>
                                    <li>- googling and researching</li>
                                </ol>
                                <ol>
                                    <li><h4>Camera</h4></li>
                                    <li>- io interfaces</li>
                                    <li>- photography and videography</li>
                                    <li>- photo manipulations</li>
                                    <li>- photo retouching</li>
                                    <li>- video editing and animating</li>
                                </ol>
                                <ol>
                                    <li><h4>Design</h4></li>
                                    <li>- web design and wireframing</li>
                                    <li>- print and digital work</li>
                                    <li>- brand development</li>
                                    <li>- interpreting styleguides</li>
                                </ol>
                                <ol>
                                    <li><h4>Communication</h4></li>
                                    <li>- proficient English</li>
                                    <li>- conversational Mandarin</li>
                                    <li>- conversational ChaoZhou</li>
                                    <li>- using social platforms</li>
                                    <li>- targeted emails</li>
                                    <li>- cloud and file sharing</li>
                                </ol>
                                <ol>
                                    <li><h4>Bucket list</h4></li>
                                    <li>- understand cars</li>
                                    <li>- play piano</li>
                                    <li>- 3d modelling</li>
                                    <li>- track racing</li>
                                    <li>- cooking</li>
                                    <li>- fishing/hunting</li>
                                </ol>
                            </div>
                        </div>
                    }
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="cards-3 hrzBT">
                    <Card className="card" header="Agendas" elements={
                        <div>
                            <p>On-going projects, tasks, and more.</p>
                            <p>Updated every Sunday morning, 5am EDT.</p>
                            <Slot content={[
                                <p className="style5">Date</p>,
                                <p className="style5">Agenda</p>,
                                <p className="style5">Status</p>
                            ]} />
                            <div role="list" className="card-vrt">

                                {this.state.agendas ? this.renderSlots(this.state.agendas, (doc) => {
                                    return (
                                        <Slot
                                            role="listitem"
                                            key={`${doc.data().name}${doc.data().date.toString()}`}
                                            href={doc.data().href}
                                            content={[
                                                <p>{this.renderDate(doc.data().date.seconds)}</p>,
                                                <p>{doc.data().name}</p>,
                                                <p>{doc.data().status}</p>
                                            ]}
                                        />
                                    )
                                }) : <p>loading agenda ...</p>}
                            </div>
                        </div>
                    } />
                    <Card className="card" header="Education" elements={
                        <div>
                            <p>University at Buffalo - Expected Feb 1, 2021.</p>
                            <p>Computer Science Major, Communications Minor</p>
                            <Slot content={[
                                <p className="style5">Term</p>,
                                <p className="style5">Course</p>,
                                <p className="style5">Status</p>
                            ]} />
                            <div role="list" className="card-vrt">
                                {this.state.user_courses ? this.renderSlots(this.state.user_courses, (doc) => {
                                    return (
                                        <Slot
                                            role="listitem"
                                            key={`${doc.data().course}${doc.data().term}${doc.data().year}`}
                                            href={this.state.courses.get(doc.data().course).link}
                                            content={[
                                                <p>{doc.data().year} {doc.data().term}</p>,
                                                <p>{doc.data().course} {this.state.courses.get(doc.data().course).name}</p>,
                                                <p>{doc.data().status}</p>
                                            ]}
                                        />
                                    )
                                }) : <p>loading courses ...</p>}
                            </div>
                        </div>
                    } />
                    <Card className="card" header="Projects" elements={
                        <div>
                            <p>All computer science projects and academic assignments.</p>
                            <p>More academic assignments to be added.</p>
                            <Slot content={[
                                <p className="style5">Date</p>,
                                <p className="style5">Project</p>,
                                <p className="style5">Status</p>
                            ]} />
                            <div role="list" className="card-vrt">
                                {this.state.projects ? this.renderSlots(this.state.projects, (doc) => {
                                    console.info(doc.data())
                                    return (
                                        <Slot
                                            role="listitem"
                                            key={`${doc.data().name}${doc.data()["start-date"].toString()}`}
                                            href={`/project/${doc.data().name}`}
                                            content={[
                                                <p>{this.renderDate(doc.data()["start-date"].seconds)}</p>,
                                                <p>{doc.data().name}</p>,
                                                <p>{doc.data().status.code}</p>
                                            ]}
                                        />
                                    )
                                }) : <p>loading projects ...</p>}
                            </div>
                        </div>
                    } />
                </div>

                <div className="hrzBT">
                    <Card className="card" header="Experience" elements={
                        <div>
                            <div className="hrzTL xplist">
                                <ol>
                                    <li><h4>Director of Media and Marketing&nbsp;</h4> Aug 2019 - May 2020</li>
                                    <li><em><Intext href="https://www.sa.buffalo.edu/" label="Undergraduate Student Association - University at Buffalo" /></em></li>
                                    <li>- Oversaw 4 teams (Graphics, Photo, Video, Outreach), a total of over 16 active members</li>
                                    <li>- Quality check all anything the public sees with an official Student Association logo</li>
                                    <li>- Attend weekly director meetings, coordinate with other directors</li>
                                    <li>- Interacted with over 150 clubs and 21,000 undergraduate students</li>
                                </ol>
                                <ol>
                                    <li><h4>Co-Founder, Secretary, President, Senior Advisor&nbsp;</h4> Sep 2017 - May 2020</li>
                                    <li><em><Intext href="https://www.ubphotoclub.org/" label="UB Photo Club" /></em></li>
                                    <li>- Oversaw club brand management (ie brand identity, logo, graphics, templates)</li>
                                    <li>- Modernized web presence (ie coded website, added LinkedIn page)</li>
                                    <li>- Oversaw training and organization (ie trained recruits, shared personal resources)</li>
                                </ol>
                                <ol>
                                    <li><h4>Campus Manager, Brand Ambassador&nbsp;</h4> Aug 2018 - May 2020</li>
                                    <li><em><Intext href="https://riddleandbloom.com/" label="Riddle and Bloom" /></em></li>
                                    <li>- Represented Amazon Prime Students and HBO</li>
                                    <li>- Hosted events and conducted peer-to-peer conversations</li>
                                    <li>- Created interactive social media engagements</li>
                                    <li>- Assisted students with registration process</li>
                                </ol>
                                <ol>
                                    <li><h4>Staff Photographer, Multimedia Editor, Senior Advisor&nbsp;</h4> Aug 2017 - Dec 2018</li>
                                    <li><em><Intext href="https://www.ubspectrum.com/" label="The Spectrum" /></em></li>
                                    <li>- Advised new Multimedia Senior Editor</li>
                                    <li>- Photographed and edited images for the newspaper</li>
                                    <li>- Conducted an&nbsp;<Intext href="https://catalog.buffalo.edu/courses/?abbr=ENG&num=394" label="accredited course" />&nbsp;on-behalf of Spectrum</li>
                                    <li>- Recruited and supervised staff photographers</li>
                                </ol>
                                <ol>
                                    <li><h4>Video Production Intern&nbsp;</h4> Jul 2016 - Aug 2016</li>
                                    <li><em><Intext href="https://lawline.com/" label="Lawline" /></em></li>
                                    <li>- Shadowed accreditation, marketing, and developer teams</li>
                                    <li>- Worked closely with front and back-end video production</li>
                                    <li>- Conducted research and web analysis on improving product</li>
                                    <li>- Completed and presented large project</li>
                                </ol>
                                <ol></ol>
                            </div>
                        </div>
                    }
                        style={{ width: "100%" }}
                    />
                </div>
            </section>
        )
    }

    render() {
        console.log("address", window.location.pathname);
        return (
            <main className="resume">
                {window.location.pathname === "/" ?
                    <>
                        <section className="pagecover vrtCC splash">
                            <div className="pagecover-bg header vrtCC" style={{ backgroundImage: `radial-gradient(ellipse, var(--LightS) 10%, transparent 50%), url(${Wideboy})` }}></div>
                            <div className="logo-container vrtCC fade-in dragoff">
                                <img className="logo-homepage dragoff" src={Logo} alt="by jack li logo, letter J and L" />
                                <p className="style4 dragoff">DARE TO IMAGINE.</p>
                            </div>
                            <p className="more fade-in expand dragoff">›››</p>
                        </section>
                        {this.state.resume ? this.renderResume() : null}
                    </> :
                    this.renderResume()
                }
            </main>
        );
    };
}

export default Resume;