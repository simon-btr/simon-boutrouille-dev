import React from "react";
import styles from "./MeStyles.module.css";
import meImg from "../../assets/me.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

function Me() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="me" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.me} src={meImg} alt="Profile picture"></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          Simon
          <br />
          Boutrouille
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/simon-boutrouille/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn icon"></img>
          </a>
          <a href="https://github.com/simon-btr/" target="_blank">
            <img src={githubIcon} alt="GitHub icon"></img>
          </a>
        </span>
        <p className={styles.description}>
          Hello! My name is Simon Boutrouille, and I am a passionate web
          developer. I enjoy working with modern technologies and continuously
          learning new skills to enhance my development capabilities.
        </p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Me;
