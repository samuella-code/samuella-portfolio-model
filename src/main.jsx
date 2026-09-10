import React, { useEffect } from 'react'
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
  { title: 'Fashion', note: 'Designer showcases & lookbooks', className: 'work-square', image: '/images/fashion-01.jpg' },
  { title: 'Commercial / TVC', note: 'Commercial & brand-facing work', className: 'work-wide', image: '/images/commercial-01.jpg' },
  { title: 'Campaigns', note: 'Fashion, beauty & creative collaborations', className: 'work-square', image: '/images/campaign-01.jpg' },
  { title: 'Aystitcches1706', note: 'Selected fashion work', className: 'work-tall', image: '/images/aystitcches-01.jpg' },
]

const clients = ['SassyByEtty', 'Amostafiri', 'Awotiwa', 'The Dust of the Earth', 'Darling Hair']
const bookingTypes = ['Editorial', 'Runway', 'Campaign', 'Commercial / TVC', 'Photoshoot', 'Fashion show', 'Beauty', 'Creative collaboration', 'Other']

function ImageSlot({ src, alt, label, className = '' }) {
  return (
    <div className={`image-slot ${className}`}>
      <img src={src} alt={alt} onError={(e) => { e.currentTarget.style.display = 'none' }} />
      <div className="image-placeholder" aria-label={`${label} image placeholder`}>
        <span>{label}<small>Image coming soon</small></span>
      </div>
    </div>
  )
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.14 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

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
          <a href="#clients">Clients</a>
          <a className="nav-book" href="#booking">Book me</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <ImageSlot src="/images/hero.jpg" alt="Samuella — model portrait" label="HERO IMAGE" className="hero-image" />
          <div className="hero-copy reveal">
            <p className="eyebrow">MODEL · CREATIVE · STORYTELLER</p>
            <h1>Samuella</h1>
            <p className="hero-intro">A fashion model bringing presence, movement and intention to runway, editorial, fashion and commercial work.</p>
            <div className="hero-actions">
              <a className="circle-link" href="#work" aria-label="View portfolio">↘</a>
              <a className="text-link" href="#booking">Available for bookings <span>↗</span></a>
            </div>
          </div>
          <div className="hero-index">01 / 07</div>
        </section>

        <section className="statement" id="about">
          <p className="section-label">01 — ABOUT</p>
          <div className="statement-content reveal-on-scroll">
            <h2>More than a face in the frame.</h2>
            <p>Modelling, to me, is presence, movement and the ability to become part of a story. From runway to editorial, I bring intention, versatility and a distinct sense of self to every frame.</p>
            <p>With <strong>2+ years of modelling experience</strong>, I have worked across runway, editorial, fashion and commercial projects, building a practice rooted in confidence, professionalism and creative expression.</p>
            <p>Based in <strong>Lagos, Nigeria</strong> and available for fashion, beauty, commercial and creative projects.</p>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading reveal-on-scroll">
            <p className="section-label">02 — SELECTED WORK</p>
            <h2>In front of the<br /><em>lens.</em></h2>
          </div>
          <div className="work-grid">
            {work.map((item, i) => (
              <article className={`work-card ${item.className} reveal-on-scroll`} key={item.title}>
                <ImageSlot src={item.image} alt={`${item.title} portfolio work`} label={`IMAGE ${String(i + 1).padStart(2, '0')}`} />
                <div className="work-meta"><span>{item.title}</span><span>{item.note}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="stats-section" id="stats">
          <div className="reveal-on-scroll">
            <p className="section-label">03 — MODEL STATS</p>
            <h2>Clean lines.<br /><em>Strong presence.</em></h2>
            <p className="stats-note">For casting, fittings and booking enquiries.</p>
          </div>
          <div className="stats-grid">
            {stats.map(([label, value]) => <div className="stat" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </section>

        <section className="digitals" id="digitals">
          <div className="digitals-copy reveal-on-scroll">
            <p className="section-label">04 — DIGITALS</p>
            <h2>Simple.<br /><em>Unfiltered.</em></h2>
            <p>A dedicated space for polaroids, digitals and clean casting images. This section can grow as new model images are added.</p>
          </div>
          <ImageSlot src="/images/polaroid.jpg" alt="Samuella — polaroid / digital" label="POLAROID" className="polaroid-slot" />
        </section>

        <section className="experience" id="clients">
          <p className="section-label">05 — EXPERIENCE & CLIENTS</p>
          <div className="experience-list">
            {['Lagos Fashion Week', 'BareFashion Evening', 'Nova Fashion Show', 'Aystitcches1706'].map((item, i) => (
              <div className="experience-item" key={item}><span>0{i + 1}</span><h3>{item}</h3><span>Runway · Fashion</span></div>
            ))}
          </div>
          <div className="clients-block">
            <p className="section-label">SELECTED BRANDS & COLLABORATIONS</p>
            <div className="client-list">{clients.map((client) => <span key={client}>{client}</span>)}</div>
          </div>
        </section>

        <section className="achievements">
          <p className="section-label">06 — HIGHLIGHTS</p>
          <div className="achievement-copy reveal-on-scroll">
            <p className="eyebrow">MISS MOTHERLAND NIGERIA 2025</p>
            <h2>Best Runway<br /><em>Model.</em></h2>
            <p>Represented Cross River State at Miss Motherland Nigeria 2025, bringing runway confidence and performance to the national pageant stage.</p>
            <p className="achievement-detail">Recognition · Best Runway Model</p>
            <p className="role">Creative Director · Model</p>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="booking-intro reveal-on-scroll">
            <p className="section-label">07 — BOOKINGS</p>
            <h2>Let's create<br /><em>something memorable.</em></h2>
            <p>For bookings, campaigns, runway, editorials, commercials, fashion shows, beauty projects and creative collaborations, send an enquiry.</p>
            <div className="booking-contact">
              <span>Lagos, Nigeria</span>
              <a href="mailto:ezeogesamuella@gmail.com">ezeogesamuella@gmail.com ↗</a>
              <a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer">@yourgirl_samuella ↗</a>
            </div>
          </div>
          <form className="booking-form reveal-on-scroll" onSubmit={handleBooking}>
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
