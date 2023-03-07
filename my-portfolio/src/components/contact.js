import React from "react";
import styles from "./contact.module.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for submitting!");
  };

  const handleMouseOver = (e) => {
    const target = e.target;
    if (target.value === "") {
      target.classList.add("error");
      target.setAttribute("placeholder", `${target.name} is required`);
    } else {
      target.classList.remove("error");
      target.setAttribute("placeholder", `${target.name}`);
    }
  };

  const handleBlur = (e) => {
    const target = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (target.value === "") {
        return;
    }
    if (!emailRegex.test(target.value)) {
      target.classList.add("error");
      target.setAttribute("placeholder", "Please enter a valid email");
      const emailSpan = document.createElement("span");
      emailSpan.classList.add("error-message");
      emailSpan.textContent = "Please enter a valid email";
      target.after(emailSpan);
    }
  };

  const handleInput = (e) => {
    const emailSpan = document.querySelector(".error-message");
    if (emailSpan) {
      emailSpan.remove();
    }
  };

  return (
    <section className={styles.grid1}>
      <h2>Contact</h2>
      <form className={styles.grid2} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Name"
            onMouseOver={handleMouseOver}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="Email Address"
            placeholder="E-mail Address"
            onMouseOver={handleMouseOver}
            onBlur={handleBlur}
            onInput={handleInput}
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="Message"
            placeholder="Message"
            rows="5"
            onMouseOver={handleMouseOver}
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
