// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

import React from "react";
import styles from "./resume.module.css";
import resume from "../assets/resume.pdf"

function Resume() {
  //placeholder p tag
  return (
    <section className={styles.parent}>
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        <li>Problem Solving</li>
        <li>Pseudocode</li>
        <li>HTML5</li>
        <li>Cascading Style Sheets (CSS)</li>
        <li>JavaScript</li>
        <li>ES6</li>
        <li>Command Line</li>
        <li>Bootstrap</li>
        <li>Web API</li>
        <li>jQuery</li>
        <li>Server Side API</li>
        <li>Third Party API</li>
        <li>DayJS</li>
        <li>Insomnia</li>
        <li>AJAX</li>
        <li>Fetch</li>
        <li>JSON</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>REST APIs</li>
        <li>Heroku</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Test Driven Development</li>
        <li>Unit Testing</li>
        <li>Front-End Development</li>
      </ul>
      <a href={resume} download={resume}>
        <button>Download Resume</button>
      </a>
    </section>
  );
}

export default Resume;
