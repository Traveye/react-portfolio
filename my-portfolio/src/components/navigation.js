//this is for the navigation bar

// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

import React from 'react';
import styles from './navigation.module.css';

function Navigation() {
    return (
        <header className={styles.navParent}>
            <h1>Travis DuPree</h1>
            <nav>
                <ul className={styles.ulParent}>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default Navigation;