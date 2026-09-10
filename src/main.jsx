import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { heroImage, polaroidImage } from './featuredImages'

const stats = [
  ['Height', '175 cm'], ['Bust', '32 in'], ['Waist', '28 in'], ['Hips', '36 in'],
  ['Shoe', 'EU 42'], ['Eyes', 'Brown'], ['Hair', 'Black']
]

const gallery = [
  { src: '/images/50608cb5693f037a0ccbd225312580f2_1763199037056_0.webp.jpeg', title: 'Runway', note: 'Selected runway', shape: 'portrait', fallback: heroImage },
  { src: '/images/IMG-20251024-WA0331.jpeg', title: 'Editorial', note: 'Fashion editorial', shape: 'landscape', fallback: polaroidImage },
  { src: '/images/IMG-20250821-WA0028.jpeg', title: 'Pageant', note: 'Miss Motherland Nigeria', shape: 'portrait', fallback: heroImage },
  { src: '/images/IMG-20250801-WA0154.jpeg', title: 'Beauty', note: 'Beauty portrait', shape: 'portrait', fallback: polaroidImage },
  { src: '/images/IMG-20250713-WA0121.jpeg', title: 'Runway', note: 'Fashion show', shape: 'tall', fallback: heroImage },
  { src: '/images/111A8987.jpeg', title: 'Fashion', note: 'Studio fashion', shape: 'portrait', fallback: heroImage },
  { src: '/images/111A9304.jpeg', title: 'Fashion', note: 'Studio fashion', shape: 'portrait', fallback: polaroidImage },
  { src: '/images/IMG_6031.jpeg', title: 'Beauty', note: 'Beauty campaign', shape: 'landscape', fallback: polaroidImage },
  { src: '/images/IMG_0934.jpeg', title: 'Editorial', note: 'Creative portrait', shape: 'portrait', fallback: heroImage },
  { src: '/images/IMG_0944.jpeg', title: 'Editorial', note: 'Creative portrait', shape: 'portrait', fallback: polaroidImage },
  { src: '/images/IMG_0984.jpeg', title: 'Fashion', note: 'Designer look', shape: 'tall', fallback: heroImage },
  { src: '/images/IMG_0987.jpeg', title: 'Fashion', note: 'Designer look', shape: 'portrait', fallback: polaroidImage },
]

const digitals = [
  { src: '/images/IMG_0511.jpeg', label: 'Three-quarter', fallback: polaroidImage },
  { src: '/images/IMG_0512.jpeg', label: 'Full length', fallback: heroImage },
  { src: '/images/IMG_0508.jpeg', label: 'Profile', fallback: polaroidImage },
  { src: '/images/IMG_0519.jpeg', label: 'Portrait', fallback: polaroidImage },
  { src: '/images/IMG_0518.jpeg', label: 'Profile', fallback: polaroidImage },
]

const clients = ['SassyByEtty', 'Amostafiri', 'Awotiwa', 'The Dust of the Earth', 'Darling Hair']

function Photo({ src, fallback, alt, className = '' }) {
  const [current, setCurrent] = useState(src || fallback)
  return <div className={`photo ${className}`}><img src={current} alt={alt} loading="lazy" onError={() => setCurrent(fallback)} /></div>
}

function App() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('show'))
    }, { threshold: 0.12 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return <div className="site">
    <header className="nav">
      <a className="brand" href="#top">SAMUELLA</a>
      <nav>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#digitals">Digitals</a>
        <a href="#bookings">Bookings</a>
      </nav>
      <a className="instagram" href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer">Instagram ↗</a>
    </header>

    <main id="top">
      <section className="hero">
        <Photo src={heroImage} fallback={heroImage} alt="Samuella fashion model" className="hero-photo" />
        <div className="hero-shade" />
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">LAGOS · NIGERIA · MODEL</p>
          <h1>Samuella</h1>
          <div className="hero-bottom"><span>Runway · Editorial · Beauty · Commercial</span><a href="#portfolio">View work ↓</a></div>
        </div>
      </section>

      <section className="marquee" aria-hidden="true"><div>MODEL · CREATIVE · STORYTELLER · RUNWAY · EDITORIAL · BEAUTY · COMMERCIAL · MODEL · CREATIVE · STORYTELLER ·</div></section>

      <section className="about" id="about" data-reveal>
        <p className="section-kicker">01 / ABOUT</p>
        <div>
          <h2>Presence that moves<br/>with the <em>story.</em></h2>
          <p className="lead">Samuella is a Lagos-based fashion model with 2+ years of experience across runway, editorial, beauty and commercial work.</p>
          <p>She brings intention, versatility and a distinct sense of self to every frame — moving between strong runway presence and expressive editorial storytelling with professionalism on set.</p>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="section-head" data-reveal><p className="section-kicker">02 / SELECTED WORK</p><h2>Selected <em>work.</em></h2></div>
        <div className="editorial-grid">
          {gallery.map((item, i) => <button className={`work-card ${item.shape}`} key={`${item.title}-${i}`} onClick={() => setOpen(i)} data-reveal>
            <Photo src={item.src} fallback={item.fallback} alt={`${item.title} portfolio photograph`} />
            <div className="work-caption"><span>{String(i + 1).padStart(2, '0')}</span><strong>{item.title}</strong><small>{item.note}</small></div>
          </button>)}
        </div>
      </section>

      <section className="digitals" id="digitals">
        <div className="digital-intro" data-reveal><p className="section-kicker">03 / DIGITALS</p><h2>Clean.<br/><em>Current.</em></h2><p>Natural casting imagery showing profile, proportions and presence.</p></div>
        <div className="digital-strip">
          {digitals.map((item, i) => <figure key={item.label + i} data-reveal><Photo src={item.src} fallback={item.fallback} alt={`Samuella digital — ${item.label}`} /><figcaption>{item.label}</figcaption></figure>)}
        </div>
        <div className="stats" data-reveal>{stats.map(([k, v]) => <div key={k}><span>{k}</span><b>{v}</b></div>)}</div>
      </section>

      <section className="experience" data-reveal>
        <p className="section-kicker">04 / EXPERIENCE</p>
        <div><h2>Runway to<br/><em>editorial.</em></h2><p className="credit-line">Lagos Fashion Week · BareFashion Evening · Nova Fashion Show</p><p className="label">SELECTED BRANDS & COLLABORATIONS</p><p className="client-line">{clients.join(' · ')}</p></div>
      </section>

      <section className="highlight">
        <div data-reveal><p className="section-kicker">05 / HIGHLIGHT</p><span>MISS MOTHERLAND NIGERIA 2025</span><h2>Best Runway<br/><em>Model.</em></h2><p>Represented Cross River State at Miss Motherland Nigeria 2025 and received recognition as Best Runway Model.</p></div>
      </section>

      <section className="bookings" id="bookings">
        <div data-reveal><p className="section-kicker">06 / BOOKINGS</p><h2>Available for<br/><em>the right story.</em></h2><p>Runway, editorials, campaigns, beauty, commercial work and creative collaborations.</p></div>
        <div className="contact-cards" data-reveal><a href="mailto:ezeogesamuella@gmail.com"><small>DIRECT INQUIRY</small><strong>Email</strong><span>ezeogesamuella@gmail.com</span><i>↗</i></a><a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer"><small>SOCIAL</small><strong>Instagram</strong><span>@yourgirl_samuella</span><i>↗</i></a></div>
      </section>
    </main>

    <footer><span>© {new Date().getFullYear()} SAMUELLA</span><span>LAGOS · NIGERIA</span><a href="#top">BACK TO TOP ↑</a></footer>

    {open !== null && <div className="lightbox" onClick={() => setOpen(null)}><button className="close" aria-label="Close">×</button><div className="lightbox-inner" onClick={e => e.stopPropagation()}><Photo src={gallery[open].src} fallback={gallery[open].fallback} alt={gallery[open].title} /><p>{gallery[open].title} · {gallery[open].note}</p></div></div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
