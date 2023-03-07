// /* WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) */

import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerParent}>
      <ul className={styles.ulParent}>
        <li>
          <a href="   ">GitHub</a> 
        </li>
        <li>
          <a href="   ">LinkedIn</a> 
        </li>
        <li>
          <a href="   ">Stack Overflow</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
