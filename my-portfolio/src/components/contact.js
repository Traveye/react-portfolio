// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import React from "react";
import styles from "./contact.module.css";

function Contact() {
    return (
        <section className={styles.contactParent}>
        <h2>Contact</h2>
        <form>
            <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            </div>
            <div className={styles.formGroup}>
            <label htmlFor="email">Email address:</label>
            <input type="email" id="email" name="email" />
            </div>
            <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
        </form>
        </section>
    );
}

export default Contact;