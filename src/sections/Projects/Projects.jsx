import styles from "./ProjectsStyles.module.css";
import minesweeper from "../../assets/minesweeper.png";
import codelab from "../../assets/codelab.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
        src={minesweeper}
        link={"https://github.com/simon-btr/minesweeper"}
        title={"Minesweeper"}
        description={"Python game"}
      />
      <ProjectCard
        src={codelab}
        link={"https://code-lab-sb.netlify.app"}
        title={"Code Lab"}
        description={"My own coding lab website"}
      />
      </div>
    </section>
  );
}

export default Projects;
