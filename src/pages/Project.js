import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Card } from '../components/Nodes';
import { Intext, Button } from '../components/Clicks';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id?.toLowerCase().replace(/[ ]/g, "-").replace(/[\W]+^(-)/g, ""),
            gallery: true,
            projects: null,
            curProject: null
        }
    }

    componentDidMount() {
        const db = firebase.firestore();

        console.log("PROJECT PAGE", this.state.id);
        if (window.location.pathname === "/projects") { this.fetchData(db, true); }
        else if (this.state.id) {
            console.log("exists .. fetching data");
            this.fetchData(db, false);
        }
        else {
            console.log("doesn't exist");
            this.fetchData(db, true);
        }
        // load data into state 3.

    }

    // fetches all projects from database
    fetchData(db, bool) {

        db.collection('projects').orderBy('start-date', 'desc').orderBy('name').orderBy('status').get().then(snapshotProjects => {
            // maps all data into a map
            let allProjects = new Map();
            snapshotProjects.docs.forEach(doc => {
                allProjects.set(doc.id, doc.data());
            })
            console.info(allProjects);

            // saves all data to state
            if (bool) {
                this.setState({
                    projects: allProjects,
                    gallery: bool
                });
            }
            else {

                this.setState({
                    projects: allProjects,
                    curProject: allProjects.get(this.state.id),
                    gallery: bool
                });
            }
        });
    }

    // turns obj into a list of jsx
    objToList(obj, cb) {
        let arr = [];
        Object.keys(obj).forEach(key => {
            arr.push(
                cb(key, obj[key])
            )
        })
        return arr;
    }

    // render individual project
    renderProject() {
        let project = this.state.projects.get(this.state.id);

        // checks if project exists
        if (project && !this.state.bool) {
            // if project is upcoming, renders UPCOMING template
            if (project.upcoming) {
                return (
                    <section className="pagecover vrtCC" >
                        <div className="pagecover-bg header vrtCC" style={{ backgroundImage: `radial-gradient(ellipse, var(--LightS) 10%, transparent 50%), url(${project.background})` }}></div >
                        <h1 className="style-mega">{project.name}</h1>
                        <p>{project.desc}</p>
                        <p>{this.props.match.params.id} is an <strong>upcoming project</strong>; follow me on <i className="fab fa-twitter"></i><Intext href="https://twitter.com/byjackli" label="twitter" /> for the latest information!</p>
                        <ol className="hrzEV links">
                            {project.links ? this.objToList(project.links, function (key, value) {
                                return (<li key={key}>{key === "website" ? <i className="fas fa-globe"></i> : <i className={`fab fa-${key}`}></i>} <Intext href={value} label={key} /></li>);
                            }) : null}
                        </ol>
                    </section>
                )
            }
            // if project has more data, renders a complete, individual project template
            else {
                return (
                    <>
                        <div className="project-nav vrtTR">
                            <a className="button-root" href="#overview">
                                <div className="button-pill-nofill project-nav-button">1</div>
                                <p className="project-nav-label style5">overview</p>
                            </a>
                            <a className="button-root" href="#problem">
                                <div className="button-pill-nofill project-nav-button">2</div>
                                <p className="project-nav-label style5">problem</p>
                            </a>
                            <a className="button-root" href="#solution">
                                <div className="button-pill-nofill project-nav-button">3</div>
                                <p className="project-nav-label style5">solution</p>
                            </a>
                            <a className="button-root" href="#process">
                                <div className="button-pill-nofill project-nav-button">4</div>
                                <p className="project-nav-label style5">process</p>
                            </a>
                        </div>
                        <section className="project pagecover vrtCC" >
                            <div className="pagecover-bg header vrtCC" style={{ backgroundImage: `radial-gradient(ellipse at 25%, var(--LightS) 15%, transparent 50%), url(${project.background})` }}></div >

                            <div className="project-details">
                                <div className="project-status">
                                    <p className="style4">PROJECT STATUS:</p>
                                    <p>{project.status?.code}{project.status?.more}</p>
                                </div>

                                <h1 className="style-mega">{project.name}</h1>

                                <p className="style4">{project.desc}</p>

                                <div className="project-buttons">
                                    <Button shape="round" color="fill" label="WEBSITE" />
                                    <Button shape="round" color="fill" label="READ MORE" href="#overview" />
                                </div>
                            </div>
                            <p className="more fade-in expand dragoff">›››</p>
                        </section>

                        <section id="overview" className="project-details-extended vrtTL">
                            <h2>OVERVIEW</h2>
                            <hr></hr>
                            <div className="hrzTL" >
                                {this.renderOverview(project)}
                            </div>
                        </section>

                        <section id="problem" className="project-details-extended vrtTL" style={{ backgroundImage: "transparent" }}>
                            <h2>PROBLEM</h2>
                            <hr></hr>
                            <div className="vrtTC" >
                                {project.more?.problem
                                    ? project.more.problem
                                    : <p>Data coming soon.</p>
                                }
                            </div>
                        </section>

                        <section id="solution" className="project-details-extended vrtTL">
                            <h2>SOLUTION</h2>
                            <hr></hr>
                            <div className="vrtTC" >
                                {project.more?.solution
                                    ? project.more.solution
                                    : <p>Data coming soon.</p>
                                }
                            </div>
                        </section>

                        <section id="process" className="project-details-extended vrtTL">
                            <h2>PROCESS</h2>
                            <hr></hr>
                            <div className="vrtTC" >
                                {project.more?.process
                                    ? project.more.process
                                    : <p>Data coming soon.</p>
                                }
                            </div>
                        </section>
                    </>
                )
            }
        }

        // project doesn't exist, render DNE template
        else {
            return (
                <div className="pagecover vrtCC" >
                    <div className="pageheader">
                        {<h1>{this.state.id}<span style={{ fontSize: "inherit" }}> project does not exist!</span></h1>}
                    </div>
                </div>
            )
        }
    };

    updateCurProject(data, card) {
        this.setState({ curProject: data })
    }
    renderCard(map) {
        let arr = []
        map.forEach(project => {
            arr.push(<Card key={`keyvalue=${project.name}`} header={project.name} onClick={this.updateCurProject.bind(this, project)} elements={[
                <p key={`${project.name}childelement-p0`}>{project.desc}</p>
            ]}
            />)
        })
        return arr;
    }
    // render overview
    renderOverview() {
        if (this.state.curProject) {
            if (this.state.curProject.upcoming) {
                return (<p>{this.state.curProject.name} is an <strong>upcoming project</strong>; follow me on <i className="fab fa-twitter"></i><Intext href="https://twitter.com/byjackli" label="twitter" /> for the latest information!</p>)
            }
            else {
                return (<>
                    <ol>
                        <li className="style3">Synopsis</li>
                        <li>The <strong>problem</strong> {this.state.curProject.problem}.</li>
                        <li>&nbsp;</li>
                        <li>The <strong>solution</strong> {this.state.curProject.solution}.</li>
                        <li>&nbsp;</li>
                        <li>The <strong>process</strong> {this.state.curProject.process}.</li>
                    </ol>
                    <ol>
                        <li className="style3">Tools</li>
                        {this.state.curProject.tools ? this.objToList(this.state.curProject.tools, function (key, value) {
                            return (<li key={key}><strong>{key}</strong> - {value}</li>);
                        }) : null}
                    </ol>

                    <ol>
                        <li className="style3">Links</li>
                        {this.state.curProject.links ? this.objToList(this.state.curProject.links, function (key, value) {
                            return (<li key={key}>{key === "website" ? <i className="fas fa-globe"></i> : <i className={`fab fa-${key}`}></i>} <Intext href={value} label={key} /></li>);
                        }) : null}
                    </ol>
                    <ol>
                        <li><Button shape="round" color="fill" label="READ MORE" href={`/project/${this.state.curProject.name}`} /></li>
                    </ol>
                </>)
            }
        }

        else {
            return (
                <p>To preview, select a project!</p>
            )
        }

    }
    // render project gallery
    renderGallery(standalone) {
        let projects = this.state.projects;

        if (projects) {

            return (
                <>
                    <section className={standalone ? "project-all pagecover vrtTC" : "pagecover vrtTC"}>
                        <div className="pagecover-bg vrtCC" style={{ backgroundImage: `linear-gradient(var(--LightS), var(--LightS)), url(https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/80741289_600781257337769_2721757817576791725_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=B6YJOCK8C54AX8nVZZb&oh=acd9aebaadd2dfdbc2a9c9ee9ab1ee95&oe=5EFC2587)` }}></div >
                        <div className="pageheader">
                            {standalone ? <h1>All Projects</h1> : <h2>Explore other projects by Jack</h2>}
                        </div>
                        <div className="gallery">
                            <div className="gallery-list">
                                {this.state.projects ? this.renderCard(this.state.projects) : <p>loading cards...</p>}
                            </div>
                            <div className="gallery-overview">
                                {this.renderOverview()}
                            </div>
                        </div>
                    </section>
                </>
            )
        }
        else {

        }
    };

    render() {
        return (
            <main className="project">
                {this.state.gallery ? this.renderGallery(true) : this.renderProject()}
                {this.state.gallery ? null : this.renderGallery()}
            </main>
        );
    }
}

export default Project;