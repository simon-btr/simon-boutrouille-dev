import React from "react";

function ProjectCard({ src, link, title, description }) {
  return (
    <a href={link}>
      <img className="hover" src={src} alt={"${title} logo"}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

export default ProjectCard;
