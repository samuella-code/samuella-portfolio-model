import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const hero = '/images/pics/I38A9558.jpg'
const fallbackImage = '/images/pics/IMG-20250801-WA0154.jpg'

const stats = [
  ['Height', '175 cm'], ['Bust', '32 in'], ['Waist', '28 in'], ['Hips', '36 in'],
  ['Shoe', 'EU 42'], ['Eyes', 'Brown'], ['Hair', 'Black']
]

const gallery = [
  { src: '/images/pics/I38A9558.jpg', title: 'Fashion', note: 'Studio portrait', shape: 'feature' },
  { src: '/images/pics/IMG-20251024-WA0331.jpg', title: 'Editorial', note: 'Selected editorial', shape: 'portrait' },
  { src: '/images/pics/IMG-20250801-WA0154.jpg', title: 'Beauty', note: 'Beauty portrait', shape: 'portrait' },
  { src: '/images/pics/IMG-20250713-WA0121.jpg', title: 'Runway', note: 'Fashion show', shape: 'wide' },
  { src: '/images/pics/IMG-20250801-WA0155.jpg', title: 'Beauty', note: 'Selected beauty', shape: 'portrait' },
  { src: '/images/pics/I38A9643.jpg', title: 'Fashion', note: 'Studio fashion', shape: 'tall' },
  { src: '/images/pics/IMG-20251024-WA0329.jpg', title: 'Runway', note: 'Selected runway', shape: 'portrait' },
  { src: '/images/pics/IMG-20251024-WA0324.jpg', title: 'Editorial', note: 'Selected work', shape: 'portrait' },
  { src: '/images/pics/IMG_0944.JPG', title: 'Editorial', note: 'Creative portrait', shape: 'wide' },
  { src: '/images/pics/IMG_0987.JPG', title: 'Fashion', note: 'Designer look', shape: 'portrait' }
]

const digitals = [
  { src: '/images/pics/IMG_0510.JPG', label: 'Full length' },
  { src: '/images/pics/IMG_0511.JPG', label: 'Three-quarter' },
  { src: '/images/pics/IMG_0512.JPG', label: 'Full length' },
  { src: '/images/pics/IMG_0518.JPG', label: 'Profile' }
]

const clients = ['SassyByEtty', 'Amostafiri', 'Awotiwa', 'The Dust of the Earth', 'Darling Hair']

function Photo({ src, alt, className = '', priority = false }) {
  const [current, setCurrent] = useState(src)
  return (
    <div className={`photo ${className}`}>
      <img
        src={current}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setCurrent(fallbackImage)}
      />
    </div>
  )
}

function App() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open === null ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  return <div className="site">
    <header className="nav">
      <a className="brand" href="#top">SAMUELLA</a>
      <nav>
        <a href="#portfolio">Work</a>
        <a href="#about">About</a>
        <a href="#digitals">Digitals</a>
        <a href="#bookings">Book</a>
      </nav>
      <a className="instagram" href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer">Instagram ↗</a>
    </header>

    <main id="top">
      <section className="hero">
        <Photo src={hero} alt="Samuella fashion model" className="hero-photo" priority />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow hero-enter">Lagos, Nigeria · Fashion Model</p>
          <h1 className="hero-enter delay-1">Samuella</h1>
          <div className="hero-bottom hero-enter delay-2">
            <span>Runway · Editorial · Beauty · Commercial</span>
            <a href="#portfolio">Explore portfolio <b>↓</b></a>
          </div>
        </div>
      </section>

      <section className="marquee" aria-hidden="true"><div>RUNWAY · EDITORIAL · BEAUTY · COMMERCIAL · CREATIVE · STORYTELLING · RUNWAY · EDITORIAL · BEAUTY · COMMERCIAL · CREATIVE · STORYTELLING ·</div></section>

      <section className="about section-shell" id="about">
        <div className="section-index" data-reveal>01 — ABOUT</div>
        <div className="about-copy" data-reveal>
          <p className="pretitle">MODEL · CREATIVE · STORYTELLER</p>
          <h2>Presence, movement<br/>and a <em>point of view.</em></h2>
          <p className="lead">Samuella is a Lagos-based fashion model with 2+ years of experience across runway, editorial, beauty and commercial work.</p>
          <p className="body-copy">From the runway to the camera, she brings intention, versatility and a distinct sense of self to each project — adapting to the story while keeping her own presence unmistakable.</p>
          <a className="text-link" href="#bookings">Booking enquiries ↗</a>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolio-head section-shell">
          <div className="section-index" data-reveal>02 — PORTFOLIO</div>
          <div data-reveal><p className="pretitle">SELECTED WORK</p><h2>Stories in <em>frame.</em></h2></div>
        </div>
        <div className="editorial-grid">
          {gallery.map((item, i) => (
            <button className={`work-card ${item.shape}`} key={`${item.title}-${i}`} onClick={() => setOpen(i)} data-reveal>
              <Photo src={item.src} alt={`${item.title} portfolio photograph`} />
              <div className="work-caption"><span>{String(i + 1).padStart(2, '0')}</span><strong>{item.title}</strong><small>{item.note}</small><i>↗</i></div>
            </button>
          ))}
        </div>
      </section>

      <section className="digitals" id="digitals">
        <div className="digital-top section-shell">
          <div className="section-index" data-reveal>03 — DIGITALS</div>
          <div data-reveal><p className="pretitle">CASTING</p><h2>Clean. Current.<br/><em>Unfiltered.</em></h2><p className="body-copy">Natural casting imagery showing profile, proportions and presence.</p></div>
        </div>
        <div className="digital-strip">
          {digitals.map((item, i) => <figure key={item.label + i} data-reveal><Photo src={item.src} alt={`Samuella digital — ${item.label}`} /><figcaption><span>{String(i + 1).padStart(2, '0')}</span>{item.label}</figcaption></figure>)}
        </div>
        <div className="stats" data-reveal>{stats.map(([k, v]) => <div key={k}><span>{k}</span><b>{v}</b></div>)}</div>
      </section>

      <section className="experience section-shell">
        <div className="section-index" data-reveal>04 — EXPERIENCE</div>
        <div data-reveal>
          <p className="pretitle">SELECTED CREDITS</p>
          <h2>Runway to<br/><em>editorial.</em></h2>
          <div className="credit-row"><span>Runway</span><p>Lagos Fashion Week · BareFashion Evening · Nova Fashion Show</p></div>
          <div className="credit-row"><span>Brands</span><p className="client-line">{clients.join(' · ')}</p></div>
        </div>
      </section>

      <section className="highlight">
        <div className="highlight-inner" data-reveal>
          <p className="pretitle">05 — HIGHLIGHT · MISS MOTHERLAND NIGERIA 2025</p>
          <h2>Best Runway<br/><em>Model.</em></h2>
          <p>Represented Cross River State at Miss Motherland Nigeria 2025 and received recognition as Best Runway Model.</p>
        </div>
      </section>

      <section className="bookings" id="bookings">
        <div data-reveal>
          <p className="pretitle accent">06 — BOOKINGS</p>
          <h2>For the next<br/><em>good story.</em></h2>
          <p>Available for runway, editorials, campaigns, beauty, commercial work and considered creative collaborations.</p>
        </div>
        <div className="contact-cards" data-reveal>
          <a href="mailto:ezeogesamuella@gmail.com"><small>DIRECT INQUIRY</small><strong>Email</strong><span>ezeogesamuella@gmail.com</span><i>↗</i></a>
          <a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer"><small>SOCIAL</small><strong>Instagram</strong><span>@yourgirl_samuella</span><i>↗</i></a>
        </div>
      </section>
    </main>

    <footer><span>© {new Date().getFullYear()} SAMUELLA</span><span>MODEL · LAGOS, NIGERIA</span><a href="#top">BACK TO TOP ↑</a></footer>

    {open !== null && <div className="lightbox" onClick={() => setOpen(null)}>
      <button className="close" aria-label="Close">×</button>
      <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
        <Photo src={gallery[open].src} alt={gallery[open].title} priority />
        <div className="lightbox-meta"><span>{gallery[open].title}</span><span>{gallery[open].note}</span></div>
      </div>
    </div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
