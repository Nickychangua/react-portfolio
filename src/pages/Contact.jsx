import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

function Contact() {
  const navigate = useNavigate()
// Stores the information entered in the contact form
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })
// Updates the corresponding form field when the user types
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Contact Form:', formData)

    navigate('/')
  }

  return (
    <main className="contact-page">

      <section className="contact-header">
        <p className="contact-label">Get In Touch</p>

        <h1>Contact Me</h1>

        <p>
          Have a question, project idea, or just want to connect?
          Feel free to reach out.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">

          <p className="contact-small-label">Contact Information</p>

          <h2>Let's connect.</h2>

          <p className="contact-intro">
            I'm always interested in learning about new opportunities,
            projects, and ideas in technology.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <span>✉️</span>

              <div>
                <p>Email</p>
                <a href="mailto:nicolasgarciaolaya@gmail.com">
                  nicolasgarciaolaya@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>

              <div>
                <p>Location</p>
                <span>Toronto, Ontario</span>
              </div>
            </div>

          </div>

        </div>


        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

          </div>


          <div className="form-row">

            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

          </div>


          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>


          <button type="submit" className="submit-button">
            Send Message
          </button>

        </form>

      </section>

    </main>
  )
}

export default Contact