import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const stats = [
  ['Height', '175 cm'],
  ['Bust', '32 in'],
  ['Waist', '28 in'],
  ['Hips', '36 in'],
  ['Shoe', '42'],
  ['Eyes', 'Brown'],
  ['Hair', 'Black'],
]

const work = [
  { title: 'Runway', note: 'Lagos Fashion Week · BareFashion Evening · Nova Fashion Show', className: 'work-large' },
  { title: 'Editorial', note: 'Fashion, beauty & visual storytelling', className: 'work-tall' },
  { title: 'Fashion', note: 'Designer showcases & lookbook work', className: 'work-square' },
  { title: 'Commercial / TVC', note: 'Brand-facing commercial work', className: 'work-wide' },
  { title: 'Campaigns', note: 'Fashion & creative collaborations', className: 'work-square' },
  { title: 'Aystitcches1706', note: 'Selected fashion work', className: 'work-tall' },
]

function App() {
  const handleBooking = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Booking enquiry — ${form.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\\nEmail: ${form.get('email')}\\nBooking type: ${form.get('type')}\\nDate: ${form.get('date')}\\nLocation: ${form.get('location')}\\n\\n${form.get('message')}`
    )
    window.location.href = `mailto:YOUR-BOOKING-EMAIL@example.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="site">
      <header className="nav">
        <a className="wordmark" href="#top">SAMUELLA</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stats">Stats</a>
          <a className="nav-book" href="#booking">Book me</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image image-placeholder">
            <span>HERO IMAGE<br /><small>Replace with approved portrait</small></span>
          </div>
          <div className="hero-copy reveal">
            <p className="eyebrow">MODEL · CREATIVE · STORYTELLER</p>
            <h1>Samuella</h1>
            <p className="hero-intro">Presence in every frame. Movement with intention. A versatile fashion model available for runway, editorial, fashion and commercial work.</p>
            <a className="circle-link" href="#work" aria-label="View portfolio">↘</a>
          </div>
          <div className="hero-index">01 / 06</div>
        </section>

        <section className="statement" id="about">
          <p className="section-label">01 — ABOUT</p>
          <div className="statement-content">
            <h2>More than a face in the frame.</h2>
            <p>I see modelling as presence, movement and the ability to become part of a story. From runway to editorial, I bring intention, versatility and a distinct sense of self to every frame.</p>
            <p>With a growing body of runway and fashion experience, I work across visual concepts that call for confidence, elegance and character.</p>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="section-label">02 — SELECTED WORK</p>
            <h2>In front of the<br /><em>lens.</em></h2>
          </div>
          <div className="work-grid">
            {work.map((item, i) => (
              <article className={`work-card ${item.className}`} key={item.title}>
                <div className="image-placeholder work-image"><span>IMAGE {String(i + 1).padStart(2, '0')}<br /><small>Reserved for portfolio image</small></span></div>
                <div className="work-meta"><span>{item.title}</span><span>{item.note}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="stats-section" id="stats">
          <div>
            <p className="section-label">03 — MODEL STATS</p>
            <h2>Measurements,<br /><em>precisely.</em></h2>
          </div>
          <div className="stats-grid">
            {stats.map(([label, value]) => <div className="stat" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </section>

        <section className="experience">
          <p className="section-label">04 — EXPERIENCE</p>
          <div className="experience-list">
            {['Lagos Fashion Week', 'BareFashion Evening', 'Nova Fashion Show', 'Aystitcches1706'].map((item, i) => (
              <div className="experience-item" key={item}><span>0{i + 1}</span><h3>{item}</h3><span>Selected work</span></div>
            ))}
          </div>
        </section>

        <section className="achievements">
          <p className="section-label">05 — HIGHLIGHTS</p>
          <div className="achievement-copy">
            <p className="eyebrow">MISS MOTHERLAND NIGERIA 2025</p>
            <h2>Best Runway<br /><em>Model.</em></h2>
            <p>Represented Cross River State at Miss Motherland Nigeria 2025, where runway presence and performance earned the Best Runway Model recognition.</p>
            <p className="role">Creative Director · Model</p>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="booking-intro">
            <p className="section-label">06 — BOOKINGS</p>
            <h2>Let's create<br /><em>something memorable.</em></h2>
            <p>For bookings, campaigns, runway, editorials, commercials, fashion projects and creative collaborations, send an enquiry below.</p>
            <a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
          <form className="booking-form" onSubmit={handleBooking}>
            <label>Name<input required name="name" placeholder="Your name / brand" /></label>
            <label>Email<input required type="email" name="email" placeholder="hello@brand.com" /></label>
            <label>Booking type<select required name="type"><option value="">Select one</option><option>Editorial</option><option>Runway</option><option>Campaign</option><option>Commercial / TVC</option><option>Photoshoot</option><option>Fashion show</option><option>Collaboration</option><option>Other</option></select></label>
            <div className="form-row"><label>Date<input name="date" type="date" /></label><label>Location<input name="location" placeholder="Lagos / Abuja / Remote" /></label></div>
            <label>Tell me about the project<textarea required name="message" rows="5" placeholder="Project, brand, deliverables, usage and any useful details..." /></label>
            <button type="submit">Send booking enquiry <span>↗</span></button>
          </form>
        </section>
      </main>

      <footer className="footer"><span>© {new Date().getFullYear()} Samuella</span><span>Model · Creative · Storyteller</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
