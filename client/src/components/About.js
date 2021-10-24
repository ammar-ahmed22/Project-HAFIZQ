import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const About = () => {
    return (
        <>
        <Nav />
        <section className="container about py-3">
            <h1>About</h1>
            <p>As part of the Dreamschools interview, I was tasked with creating this full-stack web application to list educational programs.</p>
            <h2>Tech Stack</h2>
            <h4>Front-End</h4>
            <ul>
                <li>React</li>
                <li>Bootstrap (styling)</li>
                <li>Boxicons (icons)</li>
            </ul>
            <h4>Back-End</h4>
            <ul>
                <li>Node.js</li>
                <li>Express.js (server)</li>
                <li>Mongoose (database structuring)</li>
            </ul>
            <h4>Database</h4>
            <ul>
                <li>MongoDB</li>
            </ul>
            <h4>Hosting</h4>
            <ul>
                <li>Google Firebase (front-end)</li>
                <li>Heroku (back-end)</li>
                <li>MongoDB Atlas (database structuring)</li>
            </ul>
        </section>
        <Footer />
        </>
    );
}

export default About;
