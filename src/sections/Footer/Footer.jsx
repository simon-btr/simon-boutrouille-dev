import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Simon Boutrouille. <br />
        All right reserved.
      </p>
    </section>
  );
}

export default Footer;
