import React, { useState } from "react";
import projectsData from "../data/data";

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
          <div className="project-card" key={project.id}>
            <div className="img">
              <img src={project.image} alt={project.title} />
              <div className="button-group flex justify-evenly align-center">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies flex align-center">
                {project.technologies.map((technology) => (
                  <a href="javacript:void(0);"
                    key={technology}
                    onClick={() => handleSelectTag(technology)}
                  >
                    {technology}
                  </a>
                ))}
              </div>
              <div className="button-group">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
