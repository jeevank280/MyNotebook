// src/About.js

import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1>About This App</h1>
            <p className="lead">
                Welcome to the MyNotebook App. This app is designed to help you keep track of your thoughts, ideas, and tasks in an organized manner. Whether you need to note down a quick note or maintain a detailed list of tasks, our app has got you covered.
            </p>
            <h2>Features</h2>
            <ul>
                <li>Create, edit, and delete notes.</li>
                <li>Responsive design for use on any device.</li>
                <li>Secure and private: your notes are only accessible to you.</li>
            </ul>
            <h2>Technology Stack</h2>
            <p>
                This application is built using the MERN stack:
            </p>
            <ul>
                <li><strong>MongoDB:</strong> For storing notes in a non-relational database.</li>
                <li><strong>Express.js:</strong> For handling the backend server and API requests.</li>
                <li><strong>React.js:</strong> For building the user interface.</li>
                <li><strong>Node.js:</strong> For running the server-side JavaScript.</li>
            </ul>
            
        </div>
    );
};

export default About;

