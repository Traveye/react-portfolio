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
        <img className={styles.img} src={require("../assets/photo.png")} alt="Travis DuPree" />
      </section>
    </div>
  );
}

export default About;
