import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Card, Slot } from '../components/Nodes';
import { Intext, Tag, PillFill } from '../components/Clicks';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            gallery: true,
            projects: null
        }
    }

    componentDidMount() {
        const db = firebase.firestore();

        console.log(this.state.id);
        if (this.state.id) {
            console.log("exists .. fetching data");
            this.fetchData(db, false);
        }
        else {
            console.log("doesn't exist");
            this.fetchData(db, true);
        }
        // load data into state 
    }

    // fetches all projects from database
    fetchData(db, bool) {

        db.collection('projects').get().then(snapshotProjects => {
            // maps all data into a map
            let allProjects = new Map();
            snapshotProjects.docs.forEach(doc => {
                allProjects.set(doc.id, doc.data());
            })
            console.info(allProjects);

            // saves all data to state
            this.setState({
                projects: allProjects,
                gallery: bool
            });
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

        if (project) {
            if (project.upcoming) {
                return (
                    <section className="pagecover center" >
                        <div className="pagecover-bg center" style={{ backgroundImage: `radial-gradient(ellipse, var(--LightS) 10%, transparent 50%), url(${project.background})` }}></div >
                        <h1 className="style-mega">{project.name}</h1>
                        <p>{project.desc}</p>
                        <p>This is an <strong>upcoming project</strong>; follow me on <i className="fab fa-twitter"></i><Intext href="https://twitter.com/byjackli" label="twitter"/> for the latest information!</p>
                        <ol className="hrzEV links">
                            {project.links ? this.objToList(project.links, function (key, value) {
                                return (<li key={key}>{key === "website" ? <i className="fas fa-globe"></i> : <i className={`fab fa-${key}`}></i>} <Intext href={value} label={key} /></li>);
                            }) : null}
                        </ol>
                    </section>
                )
            }
            else {
                return (
                    <>
                        <section className="pagecover center" >
                            <div className="pagecover-bg center" style={{ backgroundImage: `radial-gradient(ellipse, var(--LightS) 10%, transparent 50%), url(${project.background})` }}></div >
                            <h1 className="style-mega">{project.name}</h1>
                            <p>{project.desc}</p>
                            <ol className="hrzEV links">
                                {project.links ? this.objToList(project.links, function (key, value) {
                                    return (<li key={key}>{key === "website" ? <i className="fas fa-globe"></i> : <i className={`fab fa-${key}`}></i>} <Intext href={value} label={key} /></li>);
                                }) : null}
                            </ol>
                        </section>
                        <section className="details center">
                            <div className="hrzEV" >
                                <ol>
                                    <h2>Synopsis</h2>
                                    <li>The <strong>problem</strong> {project.problem}.</li>
                                    <li>&nbsp;</li>
                                    <li>The <strong>solution</strong> {project.solution}.</li>
                                    <li>&nbsp;</li>
                                    <li>The <strong>process</strong> {project.process}.</li>
                                    <li>&nbsp;</li>
                                    <li>The <strong>tags</strong> associated with this project.</li>
                                    <li>
                                        {project.tags ?
                                            <div className="hrzTL tagList">
                                                {project.tags.map(tag => (
                                                    <Tag tag={tag} />
                                                ))}
                                            </div> : null
                                        }</li>
                                </ol>
                                <ol>
                                    <h2>Tools</h2>
                                    {project.tools ? this.objToList(project.tools, function (key, value) {
                                        return (<li key={key}><strong>{key}</strong> - {value}</li>);
                                    }) : null}
                                </ol>
                            </div>
                        </section>
                        <section className="center">
                            <h2>Wireframe &amp; Notes</h2>

                            <p>What are you waiting for? Go ahead and check out the &nbsp; <PillFill href="#" type="fill" label="Final Product" /></p>

                        </section>
                        <section className="center">
                            <h2>Explore other projects by Jack</h2>

                        </section>
                    </>
                )
            }
        }
        else {
            return (
                <>
                    <p className="style3">{this.state.id} does not exist</p>
                    <p>Feel free to check out my existing and upcoming projects!</p>
                    {this.renderGallery()}
                </>
            )
        }
    };

    // render project gallery
    renderGallery() {
        return (
            <div className="pageheader">
                <h1>All Projects</h1>
            </div>
        )
    };

    render() {
        return (
            <main className="project">
                {this.state.gallery ? this.renderGallery() : this.renderProject()}
            </main>
        );
    }
}

export default Project;