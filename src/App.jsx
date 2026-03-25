import React from 'react'
import './App.css'
import profileImg from './assets/profile.jpg'

function App() {
  const hireMailto = "mailto:johntolu28@gmail.com?subject=Hire%20Request&body=Hi%20Olaniyan%2C%20I%20would%20like%20to%20hire%20you%20for...";
  const whatsappLink = "https://wa.me/2348129083966";

  return (
    <div className="portfolio-content">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container flex justify-between items-center">
          <div className="logo">OJO .</div>
          <div className="nav-links flex gap-8">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <a href={hireMailto} className="btn-primary">Hire Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container flex items-center gap-8">
          <div className="hero-text">
            <div className="badge">✨ AVAILABLE FOR WORK</div>
            <h1>Olaniyan John Olabode</h1>
            <p className="hero-description">
              Creative designer, IT specialist & digital strategist crafting exceptional digital experiences that drive results. 
              From branding to animations — I bring your vision to life.
            </p>
            <div className="hero-btns flex gap-4">
              <a href="#contact" className="btn-primary">Get in Touch</a>
              <a href="#services" className="btn-outline">View Services</a>
            </div>
            <div className="stats flex gap-8 mt-4">
              <div className="stat-item"><strong>50+</strong> Projects</div>
              <div className="stat-item"><strong>30+</strong> Clients</div>
              <div className="stat-item"><strong>5+</strong> Yrs Exp.</div>
            </div>
          </div>
          <div className="hero-image">
            <div className="glass-card profile-card">
              <img src={profileImg} alt="Olaniyan John Olabode" className="profile-pic" />
              <div className="profile-label">Creative Designer & IT Specialist</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container flex gap-8">
          <div className="about-stats">
            <div className="glass-card stat-card mb-4">
              <h3>5+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="glass-card stat-card">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
          <div className="about-content">
            <span className="overline">ABOUT ME</span>
            <h2>Turning ideas into <span className="highlight">digital reality</span></h2>
            <p>
              I'm Olaniyan John Olabode — a multidisciplinary creative professional and IT specialist. 
              I help businesses and individuals establish powerful digital presences through thoughtful design, 
              reliable tech support, and strategic marketing solutions.
            </p>
            <div className="services-list grid">
              <div className="service-item">✓ Website Design</div>
              <div className="service-item">✓ Branding</div>
              <div className="service-item">✓ IT Support</div>
              <div className="service-item">✓ UI/UX Design</div>
              <div className="service-item">✓ Marketing</div>
              <div className="service-item">✓ Graphic Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="overline">SERVICES</span>
            <h2>What I Do</h2>
          </div>
          <div className="services-grid">
            {[
              { title: "Website Design", desc: "Custom, responsive websites built to convert visitors." },
              { title: "IT Support Specialist", desc: "Reliable technical support and system maintenance." },
              { title: "Branding", desc: "Complete brand identity development — logos and color systems." },
              { title: "Graphic Design", desc: "Eye-catching visuals for print and digital — flyers, banners." },
              { title: "Marketing", desc: "Strategic digital marketing campaigns that increase visibility." },
              { title: "Animation Curator", desc: "Captivating motion graphics and animations." },
              { title: "UI/UX Design", desc: "User-centered interface design and prototyping." },
              { title: "Social Media", desc: "End-to-end social media strategy and content creation." },
              { title: "Research", desc: "In-depth research services with well-structured reports." },
              { title: "Assignment Help", desc: "Professional academic assistance — essays and projects." }
            ].map((s, i) => (
              <div key={i} className="glass-card service-card">
                <div className="service-icon">✦</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="glass-card contact-centered text-center">
            <div className="contact-info">
              <span className="overline">CONTACT</span>
              <h2>Let's Work Together</h2>
              <div className="contact-details mt-4">
                <p>📧 johntolu28@gmail.com</p>
                <p>📞 +234 812 908 3966</p>
                <p>📍 Lagos, Nigeria</p>
              </div>
              <div className="flex justify-center mt-8">
                <a href={whatsappLink} className="btn-whatsapp">Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <p>© 2026 Olaniyan John Olabode. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
