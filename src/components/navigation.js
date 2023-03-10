import React, { useEffect, useState } from "react";
import styles from "./navigation.module.css";
import anime from "animejs/lib/anime.es.js";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (!animationPlayed) {
      console.log("animation played");
      anime({
        targets: ".header",
        translateY: [-100, 0],
        duration: 1000,
        easing: "easeInOutQuad",
      });
      setAnimationPlayed(true);
    }
  }, [animationPlayed]);

  return (
    <header className={styles.navParent}>
      <h1>Travis DuPree</h1>
      
      <nav>
        <ul className={styles.ulParent}>
          <li>
            <NavLink to="/" exact activeClassName={styles.activeLink}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio" activeClassName={styles.activeLink}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" activeClassName={styles.activeLink}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="resume" activeClassName={styles.activeLink}>
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
