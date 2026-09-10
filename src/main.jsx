import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { heroImage, polaroidImage } from './featuredImages'

const stats=[['Height','175 cm'],['Bust','32 in'],['Waist','28 in'],['Hips','36 in'],['Shoe','EU 42'],['Eyes','Brown'],['Hair','Black']]
const clients=['SassyByEtty','Amostafiri','Awotiwa','The Dust of the Earth','Darling Hair']
const books=[
 {title:'Runway',sub:'Lagos Fashion Week · BareFashion Evening · Nova Fashion Show',img:heroImage},
 {title:'Editorial',sub:'Fashion · Beauty · Visual stories',img:polaroidImage},
 {title:'Beauty',sub:'Portraiture · Beauty · Creative',img:polaroidImage},
 {title:'Digitals',sub:'Casting · Profile · Full length',img:heroImage}
]
function App(){
 const [open,setOpen]=useState(null)
 useEffect(()=>{const els=document.querySelectorAll('[data-reveal]');const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});els.forEach(x=>o.observe(x));return()=>o.disconnect()},[])
 return <div className="site">
  <header className="nav"><nav className="nav-left"><a href="#portfolio">Portfolio</a><a href="#about">About</a></nav><a className="brand" href="#top"><small>E · O · S</small><strong>SAMUELLA</strong><i/></a><nav className="nav-right"><a href="#bookings">Bookings</a><a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer">Connect</a></nav></header>
  <main id="top">
   <section className="opening" data-reveal><div className="opening-grid"><figure className="tile tall"><img src={heroImage}/></figure><figure className="tile wide"><img src={polaroidImage}/></figure><figure className="tile portrait"><img src={polaroidImage}/></figure><figure className="tile small"><img src={heroImage}/></figure></div><p className="scroll-note">SCROLL TO DISCOVER ↓</p></section>

   <section className="about" id="about" data-reveal><p className="mini">ABOUT — SAMUELLA</p><div><h1>Model. <em>Movement.</em><br/>Presence.</h1><p className="lead">Samuella is a Lagos-based fashion model with 2+ years of experience across runway, editorial, beauty and commercial work.</p><p>She brings intention, versatility and a distinct sense of self to every frame — moving easily between strong runway presence and expressive editorial storytelling.</p></div></section>

   <section className="portfolio" id="portfolio"><div className="portfolio-title" data-reveal><h2>The <em>Portfolio</em> Books</h2><p>Select a category to explore Samuella's visual work.</p></div><div className="book-grid">{books.map((b,i)=><button className="book" key={b.title} onClick={()=>setOpen(i)} data-reveal><img src={b.img} alt=""/><span>{b.title}</span></button>)}</div></section>

   <section className="digitals" data-reveal><div className="digital-image"><img src={polaroidImage} alt="Samuella model digital"/></div><div className="digital-copy"><p className="mini">MODEL DETAILS</p><h2>Digitals &<br/><em>stats.</em></h2><p>Clean casting imagery and current model measurements for bookings, fittings and castings.</p><div className="stats">{stats.map(([k,v])=><div key={k}><span>{k}</span><b>{v}</b></div>)}</div></div></section>

   <section className="credits" data-reveal><p className="mini">EXPERIENCE</p><div><h2>Selected <em>credits.</em></h2><p className="credit-line">Lagos Fashion Week <span>·</span> BareFashion Evening <span>·</span> Nova Fashion Show</p><p className="mini clients-label">SELECTED BRANDS & COLLABORATIONS</p><p className="client-line">{clients.join('  ·  ')}</p><p className="award">Miss Motherland Nigeria 2025 — <em>Best Runway Model</em></p></div></section>

   <section className="bookings" id="bookings"><div className="booking-copy" data-reveal><p className="mini purple">BOOKINGS</p><h2>Available for editorials,<br/><em>campaigns</em>, runway, beauty<br/>and special projects.</h2><p>For bookings, collaborations and creative enquiries, reach out via email or Instagram DM.</p></div><div className="contact-cards" data-reveal><a href="mailto:ezeogesamuella@gmail.com"><small>DIRECT INQUIRY</small><strong>Email</strong><span>ezeogesamuella@gmail.com</span><i>↗</i></a><a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer"><small>SOCIAL CONNECTIVITY</small><strong>Instagram DM</strong><span>@yourgirl_samuella</span><i>↗</i></a></div></section>
  </main>
  <footer><span>© {new Date().getFullYear()} SAMUELLA</span><span>LAGOS · NIGERIA</span><a href="#top">BACK TO TOP ↑</a></footer>
  {open!==null&&<div className="lightbox"><button className="close" onClick={()=>setOpen(null)}>×</button><p className="mini">{books[open].title} — BOOK / 01</p><div className="lightbox-card"><img src={books[open].img} alt={`${books[open].title} portfolio`}/></div><p>{books[open].sub}</p></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>)