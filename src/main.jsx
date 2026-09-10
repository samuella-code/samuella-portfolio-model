import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const stats = [
  ['Height', '175 cm'], ['Bust', '32 in'], ['Waist', '28 in'], ['Hips', '36 in'],
  ['Shoe', 'EU 42'], ['Eyes', 'Brown'], ['Hair', 'Black']
]

const opening = [
  '/images/pics/IMG-20250801-WA0154.jpg',
  '/images/pics/IMG-20250713-WA0121.jpg',
  '/images/pics/IMG-20250801-WA0155.jpg',
]

const gallery = [
  { src: '/images/pics/IMG-20250713-WA0121.jpg', title: 'Runway', note: 'Fashion show', shape: 'portrait' },
  { src: '/images/pics/IMG-20251024-WA0331.jpg', title: 'Editorial', note: 'Fashion editorial', shape: 'landscape' },
  { src: '/images/pics/IMG-20250801-WA0154.jpg', title: 'Beauty', note: 'Beauty portrait', shape: 'portrait' },
  { src: '/images/pics/IMG-20250801-WA0155.jpg', title: 'Beauty', note: 'Beauty portrait', shape: 'portrait' },
  { src: '/images/pics/I38A9558.jpg', title: 'Fashion', note: 'Studio fashion', shape: 'tall' },
  { src: '/images/pics/I38A9643.jpg', title: 'Fashion', note: 'Studio fashion', shape: 'portrait' },
  { src: '/images/pics/IMG_6031.JPG', title: 'Beauty', note: 'Beauty campaign', shape: 'landscape' },
  { src: '/images/pics/IMG_0934.JPG', title: 'Editorial', note: 'Creative portrait', shape: 'portrait' },
  { src: '/images/pics/IMG_0944.JPG', title: 'Editorial', note: 'Creative portrait', shape: 'portrait' },
  { src: '/images/pics/IMG_0984.JPG', title: 'Fashion', note: 'Designer look', shape: 'tall' },
  { src: '/images/pics/IMG_0987.JPG', title: 'Fashion', note: 'Designer look', shape: 'portrait' },
  { src: '/images/pics/IMG_4210.JPG', title: 'Editorial', note: 'Selected work', shape: 'portrait' },
]

const digitals = [
  { src: '/images/pics/IMG_0511.JPG', label: 'Three-quarter' },
  { src: '/images/pics/IMG_0512.JPG', label: 'Full length' },
  { src: '/images/pics/IMG_0510.JPG', label: 'Full length' },
  { src: '/images/pics/IMG_0519.JPG', label: 'Portrait' },
  { src: '/images/pics/IMG_0518.JPG', label: 'Profile' },
]

const clients = ['SassyByEtty', 'Amostafiri', 'Awotiwa', 'The Dust of the Earth', 'Darling Hair']

function Photo({ src, alt, className = '', eager = false }) {
  return <div className={`photo ${className}`}><img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" fetchPriority={eager ? 'high' : 'auto'} /></div>
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
    }, { threshold: 0.1, rootMargin: '0px 0px -40px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
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
      <section className="opening">
        <div className="opening-copy" data-reveal>
          <p className="eyebrow">LAGOS · NIGERIA</p>
          <h1>Samuella</h1>
          <p className="opening-role">Fashion Model · Creative · Storyteller</p>
        </div>
        <div className="opening-images" data-reveal>
          {opening.map((src, i) => <Photo key={src} src={src} alt={`Samuella selected portrait ${i + 1}`} eager={i === 1} />)}
        </div>
        <div className="opening-foot" data-reveal><span>Runway · Editorial · Beauty · Commercial</span><a href="#portfolio">Explore portfolio ↓</a></div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="section-head" data-reveal><p className="section-kicker">01 / SELECTED WORK</p><h2>Selected <em>work.</em></h2></div>
        <div className="editorial-grid">
          {gallery.map((item, i) => <button className={`work-card ${item.shape}`} key={`${item.title}-${i}`} onClick={() => setOpen(i)} data-reveal>
            <Photo src={item.src} alt={`${item.title} portfolio photograph`} />
            <div className="work-caption"><span>{String(i + 1).padStart(2, '0')}</span><strong>{item.title}</strong><small>{item.note}</small></div>
          </button>)}
        </div>
      </section>

      <section className="about" id="about" data-reveal>
        <p className="section-kicker">02 / ABOUT</p>
        <div>
          <h2>Presence with<br/><em>intention.</em></h2>
          <p className="lead">Samuella is a Lagos-based fashion model with 2+ years of experience across runway, editorial, beauty and commercial work.</p>
          <p>Her work is grounded in movement, expression and versatility. She adapts confidently to creative direction, brings a strong visual presence to both still and motion-led projects, and approaches every set with focus, professionalism and an understanding of the story a brand wants to tell.</p>
          <p>From runway presentations to editorials, beauty work, campaigns and commercial projects, Samuella brings a refined, expressive energy that allows designers, photographers and creative teams to shape distinct visual worlds around her.</p>
          <div className="about-cta"><a href="#bookings">Book Samuella ↗</a><span>Available for runway, campaigns, editorials, beauty, TVC and creative collaborations.</span></div>
        </div>
      </section>

      <section className="digitals" id="digitals">
        <div className="digital-intro" data-reveal><p className="section-kicker">03 / DIGITALS</p><h2>Clean.<br/><em>Current.</em></h2><p>Natural casting imagery showing profile, proportions and presence.</p></div>
        <div className="digital-strip">
          {digitals.map((item, i) => <figure key={item.label + i} data-reveal><Photo src={item.src} alt={`Samuella digital — ${item.label}`} /><figcaption>{item.label}</figcaption></figure>)}
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
        <div data-reveal><p className="section-kicker">06 / BOOKINGS</p><h2>Let’s create<br/><em>something memorable.</em></h2><p>Available for runway, editorials, campaigns, lookbooks, beauty, commercial/TVC work, fashion shows and selected creative collaborations.</p></div>
        <div className="contact-cards" data-reveal><a href="mailto:ezeogesamuella@gmail.com"><small>BOOKING INQUIRIES</small><strong>Email</strong><span>ezeogesamuella@gmail.com</span><i>↗</i></a><a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer"><small>PORTFOLIO & SOCIAL</small><strong>Instagram</strong><span>@yourgirl_samuella</span><i>↗</i></a></div>
      </section>
    </main>

    <footer><span>© {new Date().getFullYear()} SAMUELLA</span><span>LAGOS · NIGERIA</span><a href="#top">BACK TO TOP ↑</a></footer>

    {open !== null && <div className="lightbox" onClick={() => setOpen(null)}><button className="close" aria-label="Close">×</button><div className="lightbox-inner" onClick={e => e.stopPropagation()}><Photo src={gallery[open].src} alt={gallery[open].title} /><p>{gallery[open].title} · {gallery[open].note}</p></div></div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
