import './Services.css'

function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description:
        'Building responsive and user-friendly websites using modern web technologies such as React, JavaScript, HTML, and CSS.'
    },
    {
      icon: '💻',
      title: 'Software Development',
      description:
        'Developing structured software solutions while applying programming, object-oriented design, and problem-solving skills.'
    },
    {
      icon: '🤖',
      title: 'AI Development',
      description:
        'Exploring artificial intelligence concepts and building projects that apply AI techniques to practical problems.'
    },
    {
      icon: '⚙️',
      title: 'Programming',
      description:
        'Creating applications and solving programming problems using languages such as Java, Python, C#, and JavaScript.'
    }
  ]

  return (
    <main className="services-page">

      <section className="services-header">
        <p className="services-label">What I Do</p>

        <h1>Services</h1>

        <p>
          Areas where I can apply my current software development skills
          while continuing to learn and grow as a developer.
        </p>
      </section>

      <section className="services-grid">

        {services.map((service) => (
          <article className="service-card" key={service.title}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

          </article>
        ))}

      </section>

    </main>
  )
}

export default Services