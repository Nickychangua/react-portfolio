import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main className="home">
      <section className="hero">

        <div className="hero-content">
          <p className="hero-welcome">Welcome to my portfolio</p>

          <h1>
            Hi, I'm <span>Nicholas.</span>
          </h1>

          <h2>AI Software Engineering Student & Software Developer</h2>

          <p className="hero-description">
            I'm a software engineering student interested in artificial
            intelligence, web development, and building creative technology.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="primary-button">
              About Me
            </Link>

            <Link to="/projects" className="secondary-button">
              View Projects
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="aero-orb">
            <span>NG</span>
          </div>

          <div className="bubble bubble-one"></div>
          <div className="bubble bubble-two"></div>
          <div className="bubble bubble-three"></div>
        </div>

      </section>

      <section className="mission">
        <p className="section-label">My Mission</p>

        <h2>Building technology that feels useful, creative, and human.</h2>

        <p>
          My goal is to continue learning and creating software that combines
          problem-solving, thoughtful design, and emerging technologies.
        </p>
      </section>
    </main>
  )
}

export default Home