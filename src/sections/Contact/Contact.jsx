import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/movlkkyo" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          ></input>
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
          ></input>
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Name
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            ></textarea>
        </div>
        <input type="submit" className="hover btn" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
