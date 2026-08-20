import { useState } from "react";
import "./Projects.css";

const projects = [

  {
    id: 1,
    name: "Resume Analyzer",
    description: "AI-Powered Resume Analysis.",
    image: "/images/resume-analyzer.png",
    category: "web",
    tech: ["React", "Node.js"]
  },

  {
    id: 2,
    name: "Student Attendance Management System",
    description: "Track Attendance, Build a Better Future. 🎓📊",
    image: "/images/attendance.png",
    category: "web",
    tech: ["React", "Node.js"]
  },

  {
    id: 3,
    name: "Online Food Ordering System",
    description: "Delicious Food, Delivered to Your Door. 🍔🚴",
    image: "/images/food-app.png",
    category: "web",
    tech: ["React", "API"]
  }

];

function Projects() {

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter
        );

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <h2>My Projects</h2>

      <div className="filter-buttons">

        <button
          className={
            filter === "all"
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={
            filter === "web"
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() => setFilter("web")}
        >
          Web
        </button>

      </div>

      <div className="project-grid">

        {filteredProjects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            <img
              src={project.image}
              alt={project.name}
            />

            <div className="project-card-body">

              <h3>
                {project.name}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tags">

                {project.tech.map((tech) => (

                  <span
                    className="tag"
                    key={tech}
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-actions">

                <a
                  href="#"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="btn btn-github"
                >
                  GitHub
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;