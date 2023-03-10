// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

import React from "react";
import styles from "./portfolio.module.css";
import jate from "../assets/jate.png";
import social from "../assets/social.png";
import backend from "../assets/backend.png";
import drop from "../assets/drop.png";
import kyg from "../assets/kyg.png";
import notes from "../assets/notes.png";


const projects = [
    {
        title: "Just Another Text Editor",
        description: "Simple text editor that utilizes cache and local storage",
        url: "https://immense-fortress-03645.herokuapp.com/",
        image: jate,
    },
    {
        title: "Social Network API",
        description: "Built an example backend with RESTful routes for a social network site",
        url: "https://github.com/Traveye/social-network-api",
        image: social,
    },
    {
        title: "E-Commerce-Backend",
        description: "Built an example backend for an ecommerce site using MySQL and RESTful routes",
        url: "https://github.com/Traveye/e-commerce-backend",
        image: backend,
    },
    {
        title: "DropIn",
        description: "A web app that lets you keep track of your travles via digital pins on a map",
        url: "http://dropin.herokuapp.com/",
        image: drop,
    },
    {
        title: "Know Your Government",
        description: "A site using third party APIs to retrieve information about your representatives",
        url: "https://bhaskell7901.github.io/know-your-government/",
        image: kyg,
    },
    {
        title: "Note App",
        description: "An application that lets you track your notes",
        url: "https://peaceful-river-60214.herokuapp.com/notes",
        image: notes,
    },
]

function Portfolio() {
    return (
        <div className={styles.cardContainer}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <img className={styles.img} src={project.image} alt={project.title} />
              <div className={styles.cardBody}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.cardLinks}>
                <p> Visit the project<a className={styles.links} href={project.url}> here</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Portfolio;