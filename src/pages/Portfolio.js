import React, { useState } from "react";
import projectsData from "../data/data";
import Card from "../components/ProjectCard";

function Portfolio() {
  const [selectedTag, setSelectedTag] = useState(null);

  function handleSelectTag(tag) {
    setSelectedTag(tag);
  }

  const filteredProjects = selectedTag
    ? projectsData.filter((project) =>
        project.technologies.includes(selectedTag)
      )
    : projectsData;

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list flex justify-center align-center wrap">
        {filteredProjects.map((project) => (
          <Card
            project={project}
            handleSelectTag={handleSelectTag}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
