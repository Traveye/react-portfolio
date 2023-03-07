// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <div>
      <section className={styles.parent}>
        <h2>About Me</h2>
        <p>
          Hi, my name is Travis DuPree and I'm a web developer with a passion
          for creating engaging and interactive user experiences. I specialize
          in full-stack development using modern web technologies like MongodB,
          Express.js, React, and Node.js.
        </p>
        <p>
          I have experience working on a variety of web projects, from small
          websites to large web applications. I'm always learning and exploring
          new technologies to stay up-to-date with the latest trends in web
          development. When I'm not coding, you can find me cooking, gardeninig,
          or spending time with my friends and family.
        </p>
        <p>
          I'm currently seeking new opportunities to work with a team of
          talented developers and designers on innovative web projects. If
          you're interested in working together or learning more about my
          experience, feel free to contact me using the form below.
        </p>
      </section>
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
      </section>
    </div>
  );
}

export default About;
