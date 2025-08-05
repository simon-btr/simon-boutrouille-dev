import styles from "./ProjectsStyles.module.css";
import minesweeper from "../../assets/minesweeper.png";
import cassebrique from "../../assets/cassebrique.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
        src={minesweeper}
        link={""}
        title={"Minesweeper"}
        description={"Python game"}
      />
      <ProjectCard
        src={cassebrique}
        link={""}
        title={"Casse Brique"}
        description={"Small javascript game"}
      />
      </div>
    </section>
  );
}

export default Projects;
