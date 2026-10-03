import './About.css'
import profilePhoto from "../assets/foto_presentable.jpeg"
<assets />

function About() {
  return (
    <main className="about-page">

      <section className="about-card">

        <div className="about-photo">
          <img
            src={profilePhoto}
            alt="Nicholas Garcia Olaya"
            className="profile-photo"
          />
        </div>

        <div className="about-content">
          <p className="about-label">About Me</p>

          <h1>Nicholas Garcia Olaya</h1>

          <h2>AI Software Engineering Student & Software Developer</h2>

          <p className="about-description">
            I'm an Artificial Intelligence Software Engineering Technology
            student at Centennial College with a strong interest in artificial
            intelligence, software development, and web technologies.
          </p>

          <p className="about-description">
            I enjoy learning how technology works and turning ideas into
            practical projects. Outside of programming, gaming is one of my
            biggest interests and has also influenced my curiosity about
            software, artificial intelligence, and interactive experiences.
          </p>

          <p className="about-description">
            I'm always looking to expand my skills, experiment with new
            technologies, and build projects that challenge me to become a
            better developer.
          </p>

          <div className="about-tags">
            <span>AI</span>
            <span>Software Development</span>
            <span>Web Development</span>
            <span>Gaming</span>
          </div>

          <a
            href="/Nicholas_Garcia_Olaya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View My Resume
          </a>
        </div>

      </section>

    </main>
  )
}

export default About