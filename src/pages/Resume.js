import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Card, Slot } from '../components/Nodes';
import { Intext } from '../components/Clicks';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: null,
            user_courses: null,
        }
    }
    componentDidMount() {

        const db = firebase.firestore();

        db.collection('courses').get().then(snapshotCourses => {
            let allCourses = new Map();
            snapshotCourses.docs.forEach(doc => {
                allCourses.set(doc.id, doc.data());
            })

            db.collection('users-courses').orderBy('year', 'desc').orderBy('term').orderBy('course').get().then(snapshotUserCourses => {
                this.setState({
                    user_courses: snapshotUserCourses.docs,
                    courses: allCourses
                });
            });
        });
    };

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
                    <Slot
                        key={`${doc.data().course}${doc.data().term}${doc.data().year}`}
                        href={this.state.courses.get(doc.data().course).link}
                        header={`${doc.data().course} ${this.state.courses.get(doc.data().course).name}`}
                        line1={doc.data().term}
                        line2={doc.data().year}
                        tags={doc.data().tags}
                    />
                ))
            }</>
        )
    }
    // renderSlots(slots, cb) {
    //     let arr = [];
    //     slots.forEach(doc => {
    //         let
    //             data = doc.data(),
    //             course = data.course,
    //             actual = this.state.courses.get(course);
    //         console.info(course);
    //         console.info(actual.link);
    //         arr.push(
    //             <Slot
    //                 key={`${data.course}${data.term}${data.year}`}
    //                 // href={this.state.courses.get(course).link}
    //                 // header={this.state.courses.get(course).name}
    //                 line1={data.term}
    //                 line2={data.year}
    //                 tags={data.tags}
    //             />
    //         )
    //     })
    //     return (
    //         <>{
    //             arr
    //         }</>
    //     )
    // }

    render() {
        return (
            <main className="resume">
                {/* {this.state.cards ? this.renderCards() :
                    <div>
                        <h2>loading ...</h2>
                        <p>This may take a while depending on your device and network connection.</p>
                    </div>
                } */}

                <div className="hrzBT">
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
                                    <li><i className="fas fa-map-marker-alt"></i> Currently home. New York, NY</li>
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
                            <p>Imposter Syndrome is a psychological pattern in which one doubts one's accomplishments and has a persistent internalized fear of being exposed as a "fraud".</p>
                            <p><Intext href="https://paulineroseclance.com/pdf/-Langford.pdf" label="[source]" /></p>
                            <div className="hrzTL">
                                <ol>
                                    <h4>Programming</h4>
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
                                    <h4>Camera</h4>
                                    <li>- io interfaces</li>
                                    <li>- photography and videography</li>
                                    <li>- photo manipulations</li>
                                    <li>- photo retouching</li>
                                    <li>- video editing and animating</li>
                                </ol>
                                <ol>
                                    <h4>Design</h4>
                                    <li>- web design and wireframing</li>
                                    <li>- print and digital work</li>
                                    <li>- brand development</li>
                                    <li>- interpreting styleguides</li>
                                </ol>
                                <ol>
                                    <h4>Communication</h4>
                                    <li>- proficient English</li>
                                    <li>- conversational Mandarin</li>
                                    <li>- conversational ChaoZhou</li>
                                    <li>- using social platforms</li>
                                    <li>- targeted emails</li>
                                    <li>- cloud and file sharing</li>
                                </ol>
                                <ol>
                                    <h4>Bucket list</h4>
                                    <li>- auto mechanic</li>
                                    <li>- pianist</li>
                                    <li>- 3d modeller</li>
                                    <li>- track racer</li>
                                    <li>- chef</li>
                                </ol>
                            </div>
                        </div>
                    }
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="hrzBT">
                    <Card className="card" header="All Current Agendas" elements={
                        <div>
                            <p>On-going projects, tasks, and more.</p>
                            <p>Updated every Sunday morning, 5am EDT.</p>
                            <div className="card-vrt">
                                <Slot line1="May" line2="17" header="byjackli personal project" tags={["motivation", "exploration", "purpose"]} image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/70515020_421309365191643_6585258917258799635_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Zolkr2asqEEAX-A_w3N&oh=26584734bf49b0404bc4115dd3a9d89e&oe=5EF10579" />
                                <Slot line1="June" line2="6" header="lyrics.byjackli project" tags={["motivation", "exploration", "purpose"]} href="/project/lyrics" image="https://www.scdn.co/i/_global/open-graph-default.png" />
                                <Slot line1="June" line2="6" header="Internet Security Course" tags={["motivation", "exploration", "purpose"]} href="https://www.udemy.com/course/du-internet-security/" image="https://img-a.udemycdn.com/course/240x135/2506082_01cc_3.jpg" />
                                <Slot line1="June" line2="20" header="photos.byjackli project" image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/60487159_410125876380768_2939073432189000809_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=hqTFIMTXtFQAX_Ss3Ra&oh=feb37d45b02de0f3570377beccc09ec7&oe=5EFB39FD" />
                                <Slot line1="June" line2="22" header="Blender 3D Modelling Course" tags={["motivation", "exploration", "purpose"]} href="https://www.youtube.com/playlist?list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U" image="https://i.ytimg.com/vi/TPrnSACiTJ4/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBqaXGYiz5GZIERze_tlHPfuEW-4A" />
                                <Slot line1="June" line2="27" header="playlists.byjackli project" image="https://i.scdn.co/image/ab67706c0000da846cef7879d0c41b96614fb96b" />
                                <Slot line1="July" line2="4" header="travel.byjackli project" image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/75580624_427744227893450_3281423545455613562_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=PjXSADk7eQ4AX83_4iL&oh=0ce8456211365588cc581aab423e6ff5&oe=5EFC228E" />
                                <Slot line1="July" line2="26" header="focus.byjackli project" image="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/47255082_261545637871712_6298646750211080192_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=Re9L1VgBS-wAX-FC5tw&oh=c0cdaf3bb9ae06c162648f430124e3c5&oe=5EF9485E" />
                            </div>
                        </div>
                    } />
                    <Card className="card" header="Education" elements={
                        <div>
                            <p>University at Buffalo - Expected May 2021.</p>
                            <p>Computer Science Major, Communications Minor</p>
                            <div className="card-vrt">
                                {this.state.user_courses ? this.renderSlots(this.state.user_courses) : <p>loading courses ...</p>}
                            </div>
                        </div>
                    } />
                    <Card className="card" header="Projects" elements={
                        <div>
                            <p>Only past computer science projects and academic assignments listed in this section.</p>
                            <div className="card-vrt">
                                <Slot href="http://webdev.cse.buffalo.edu/cse410/gr8/app/#/login" line1="Spring" line2="2020" header="TOPIX: Collaborative Learning" />
                                <Slot href="https://www.ubphotoclub.org" line1="June" line2="2018" header="UB Photo Club"  />
                                <Slot href="https://github.com/jackli1337/project-delta" line1="November" line2="2018" header="UB Hackathon" />
                                <Slot href="https://www.hsdlas.org" line1="June" line2="2014" header="High School for Dual Language and Asian Studies" />
                            </div>
                        </div>
                    } />
                </div>
            </main>
        );
    };
}

export default Resume;