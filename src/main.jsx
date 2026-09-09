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
  { title: 'Runway', note: 'Lagos Fashion Week · BareFashion Evening · Nova Fashion Show', className: 'work-large', image: '/images/runway-01.jpg' },
  { title: 'Editorial', note: 'Fashion, beauty & visual storytelling', className: 'work-tall', image: '/images/editorial-01.jpg' },
  { title: 'Fashion', note: 'Designer showcases & lookbook work', className: 'work-square', image: '/images/fashion-01.jpg' },
  { title: 'Commercial / TVC', note: 'Commercial and brand-facing work', className: 'work-wide', image: '/images/commercial-01.jpg' },
  { title: 'Campaigns', note: 'Fashion, beauty & creative collaborations', className: 'work-square', image: '/images/campaign-01.jpg' },
  { title: 'Aystitcches1706', note: 'Selected fashion work', className: 'work-tall', image: '/images/aystitcches-01.jpg' },
]

const clients = ['Sassybyetty', 'Amostafiri', 'Awotiwa', 'The Dust of the Earth', 'Darling Hair']

const bookingTypes = ['Editorial', 'Runway', 'Campaign', 'Commercial / TVC', 'Photoshoot', 'Fashion show', 'Beauty', 'Creative collaboration', 'Other']

function ImageSlot({ src, alt, label }) {
  return (
    <div className="image-slot">
      <img src={src} alt={alt} onError={(e) => { e.currentTarget.style.display = 'none' }} />
      <div className="image-placeholder" aria-label={`${label} image placeholder`}>
        <span>{label}<small>Drop approved image here</small></span>
      </div>
    </div>
  )
}

function App() {
  const handleBooking = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Booking enquiry — ${form.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nBooking type: ${form.get('type')}\nDate: ${form.get('date') || 'Not specified'}\nLocation: ${form.get('location') || 'Not specified'}\n\n${form.get('message')}`
    )
    window.location.href = `mailto:ezeogesamuella@gmail.com?subject=${subject}&body=${body}`
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
          <ImageSlot src="/images/hero.jpg" alt="Samuella — model portrait" label="HERO IMAGE" />
          <div className="hero-copy reveal">
            <p className="eyebrow">MODEL · CREATIVE · STORYTELLER</p>
            <h1>Samuella</h1>
            <p className="hero-intro">A fashion model bringing presence, movement and intention to runway, editorial, fashion and commercial work.</p>
            <div className="hero-actions">
              <a className="circle-link" href="#work" aria-label="View portfolio">↘</a>
              <a className="text-link" href="#booking">Available for bookings <span>↗</span></a>
            </div>
          </div>
          <div className="hero-index">01 / 06</div>
        </section>

        <section className="statement" id="about">
          <p className="section-label">01 — ABOUT</p>
          <div className="statement-content reveal-on-scroll">
            <h2>More than a face in the frame.</h2>
            <p>I see modelling as presence, movement and the ability to become part of a story. From runway to editorial, I bring intention, versatility and a distinct sense of self to every frame.</p>
            <p>With 5+ years of modelling experience across runway, editorial, fashion and commercial work, I approach every set with confidence, professionalism and a willingness to transform with the creative.</p>
            <p>Based in Lagos, Nigeria and available for fashion, beauty, commercial and creative projects.</p>
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
                <ImageSlot src={item.image} alt={`${item.title} portfolio work`} label={`IMAGE ${String(i + 1).padStart(2, '0')}`} />
                <div className="work-meta"><span>{item.title}</span><span>{item.note}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="stats-section" id="stats">
          <div>
            <p className="section-label">03 — MODEL STATS</p>
            <h2>Clean lines.<br /><em>Strong presence.</em></h2>
            <p className="stats-note">For casting, fittings and booking enquiries.</p>
          </div>
          <div className="stats-grid">
            {stats.map(([label, value]) => <div className="stat" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </section>

        <section className="experience">
          <p className="section-label">04 — EXPERIENCE</p>
          <div className="experience-list">
            {['Lagos Fashion Week', 'BareFashion Evening', 'Nova Fashion Show', 'Aystitcches1706'].map((item, i) => (
              <div className="experience-item" key={item}><span>0{i + 1}</span><h3>{item}</h3><span>Runway · Fashion</span></div>
            ))}
          </div>
          <div className="clients-block">
            <p className="section-label">SELECTED CLIENTS & COLLABORATIONS</p>
            <div className="client-list">{clients.map((client) => <span key={client}>{client}</span>)}</div>
          </div>
        </section>

        <section className="achievements">
          <p className="section-label">05 — HIGHLIGHTS</p>
          <div className="achievement-copy reveal-on-scroll">
            <p className="eyebrow">MISS MOTHERLAND NIGERIA 2025</p>
            <h2>Best Runway<br /><em>Model.</em></h2>
            <p>Represented Cross River State at Miss Motherland Nigeria 2025, bringing runway confidence and performance to the national pageant stage.</p>
            <p className="achievement-detail">Recognition · Best Runway Model</p>
            <p className="role">Creative Director · Model</p>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="booking-intro">
            <p className="section-label">06 — BOOKINGS</p>
            <h2>Let's create<br /><em>something memorable.</em></h2>
            <p>Available for fashion editorials, runway, campaigns, commercials, beauty projects, fashion shows and creative collaborations.</p>
            <div className="booking-contact">
              <span>Lagos, Nigeria</span>
              <a href="mailto:ezeogesamuella@gmail.com">ezeogesamuella@gmail.com ↗</a>
              <a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer">@yourgirl_samuella ↗</a>
            </div>
          </div>
          <form className="booking-form" onSubmit={handleBooking}>
            <label>Name<input required name="name" placeholder="Your name / brand" /></label>
            <label>Email<input required type="email" name="email" placeholder="hello@brand.com" /></label>
            <label>Booking type<select required name="type"><option value="">Select one</option>{bookingTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
            <div className="form-row"><label>Date<input name="date" type="date" /></label><label>Location<input name="location" placeholder="Lagos / Abuja / Other" /></label></div>
            <label>Tell me about the project<textarea required name="message" rows="5" placeholder="Brand, project, deliverables, usage, call time and any useful details..." /></label>
            <button type="submit">Send booking enquiry <span>↗</span></button>
          </form>
        </section>
      </main>

      <footer className="footer"><span>© {new Date().getFullYear()} Samuella</span><span>Model · Creative · Storyteller</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
