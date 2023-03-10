// /* WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) */

import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className='myfooter'>
      <ul className={styles.ulParent}>
        <li>
          <a href="https://github.com/Traveye">GitHub</a> 
        </li>
        <li>
          <a href="https://www.linkedin.com/in/travis-dupree-96380218b/">LinkedIn</a> 
        </li>
        <li>
          <a href="https://medium.com/@traveye">Medium</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
