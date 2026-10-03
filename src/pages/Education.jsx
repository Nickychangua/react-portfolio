import './Education.css'

function Education() {
  return (
    <main className="education-page">

      <section className="education-header">
        <p className="education-label">My Background</p>
        <h1>Education</h1>

        <p>
          My academic journey and the qualifications I'm currently
          developing in software engineering and artificial intelligence.
        </p>
      </section>

      <section className="education-timeline">

        <article className="education-card">

          <div className="timeline-marker">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
          </div>

          <div className="education-content">
            <p className="education-date">2025 — 2028</p>

            <h2>Artificial Intelligence  Software Engineering Technology</h2>

            <h3>Centennial College</h3>

            <p>
              Advanced Diploma program focused on software development,
              artificial intelligence, web technologies, databases,
              system design, and modern programming practices.
            </p>

            <div className="education-details">
              <span>Toronto, Ontario</span>
              <span>Expected Graduation: 2028</span>
            </div>
          </div>

        </article>

      </section>

    </main>
  )
}

export default Education