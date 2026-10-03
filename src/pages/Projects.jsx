import './Projects.css'

function Projects() {
  return (
    <main className="projects-page">

      <section className="projects-header">
        <p className="projects-label">My Work</p>
        <h1>Projects</h1>
        <p>
          A selection of projects I've worked on while developing my skills
          in software engineering, web development, and system administration.
        </p>
      </section>

      <section className="projects-grid">

        <article className="project-card">
          <div className="project-image project-image-blue">
            <span>React Portfolio</span>
          </div>

          <div className="project-content">
            <p className="project-type">Web Development</p>

            <h2>Personal Portfolio</h2>

            <p>
              A personal portfolio website designed and developed using React,
              Vite, and React Router with a responsive Frutiger Aero-inspired
              interface.
            </p>

            <div className="project-info">
              <p><strong>Role:</strong> Front-End Developer</p>
              <p>
                <strong>Outcome:</strong> Created a responsive multi-page
                portfolio to showcase my work, education, and skills.
              </p>
            </div>
          </div>
        </article>


        <article className="project-card">
          <div className="project-image project-image-green">
            <span>CareDupe</span>
          </div>

          <div className="project-content">
            <p className="project-type">Software Engineering</p>

            <h2>CareDupe Requirements Project</h2>

            <p>
              A software requirements engineering project focused on planning
              and documenting the requirements of a software system.
            </p>

            <div className="project-info">
              <p><strong>Role:</strong> Software Engineering Student</p>
              <p>
                <strong>Outcome:</strong> Developed structured software
                requirements and documentation as part of a team project.
              </p>
            </div>
          </div>
        </article>


        <article className="project-card">
          <div className="project-image project-image-aqua">
            <span>Linux</span>
          </div>

          <div className="project-content">
            <p className="project-type">System Administration</p>

            <h2>Linux Administration Project</h2>

            <p>
              A Linux-based project involving command-line tools, system
              configuration, shell scripting, and administration concepts.
            </p>

            <div className="project-info">
              <p><strong>Role:</strong> System Administration Student</p>
              <p>
                <strong>Outcome:</strong> Practiced configuring and managing
                Linux systems while applying automation and security concepts.
              </p>
            </div>
          </div>
        </article>

      </section>

    </main>
  )
}

export default Projects