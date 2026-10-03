import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span>NG</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar