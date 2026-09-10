import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const stats=[['Height','175 cm'],['Bust','32 in'],['Waist','28 in'],['Hips','36 in'],['Shoe','EU 42'],['Eyes','Brown'],['Hair','Black']]

const homeCollage=[
 {src:'/images/pics/IMG-20250713-WA0121.jpg',className:'home-a',alt:'Samuella runway portrait'},
 {src:'/images/pics/I38A9558.jpg',className:'home-b',alt:'Samuella fashion editorial'},
 {src:'/images/pics/IMG-20250801-WA0154.jpg',className:'home-c',alt:'Samuella beauty portrait'},
 {src:'/images/pics/IMG_0944.JPG',className:'home-d',alt:'Samuella creative portrait'},
 {src:'/images/pics/I38A9643.jpg',className:'home-e',alt:'Samuella studio fashion portrait'}
]

const gallery=[
 {src:'/images/pics/IMG-20250713-WA0121.jpg',title:'Runway',note:'Selected runway work'},
 {src:'/images/pics/IMG-20251024-WA0331.jpg',title:'Editorial',note:'Fashion editorial'},
 {src:'/images/pics/IMG-20250801-WA0154.jpg',title:'Beauty',note:'Beauty portrait'},
 {src:'/images/pics/IMG-20250801-WA0155.jpg',title:'Beauty',note:'Beauty portrait'},
 {src:'/images/pics/I38A9558.jpg',title:'Fashion',note:'Studio fashion'},
 {src:'/images/pics/I38A9643.jpg',title:'Fashion',note:'Studio fashion'},
 {src:'/images/pics/IMG_0944.JPG',title:'Editorial',note:'Creative portrait'},
 {src:'/images/pics/IMG_0984.JPG',title:'Fashion',note:'Designer look'},
 {src:'/images/pics/IMG_0987.JPG',title:'Fashion',note:'Designer look'}
]

const chapters=[
 {title:'Runway',subtitle:'Shows & presentations',image:'/images/pics/IMG-20250713-WA0121.jpg'},
 {title:'Editorial',subtitle:'Fashion stories',image:'/images/pics/I38A9558.jpg'},
 {title:'Beauty',subtitle:'Portrait & beauty',image:'/images/pics/IMG-20250801-WA0154.jpg'}
]

const digitals=[
 {src:'/images/pics/IMG_0511.JPG',label:'Three-quarter'},
 {src:'/images/pics/IMG_0512.JPG',label:'Full length'},
 {src:'/images/pics/IMG_0519.JPG',label:'Portrait'},
 {src:'/images/pics/IMG_0518.JPG',label:'Profile'}
]

const clients=['SassyByEtty','Amostafiri','Awotiwa','The Dust of the Earth','Darling Hair']

function Photo({src,alt,className='',eager=false}){return <div className={`photo ${className}`}><img src={src} alt={alt} loading={eager?'eager':'lazy'} decoding="async" fetchPriority={eager?'high':'auto'}/></div>}

function App(){
 const [open,setOpen]=useState(null)
 const [intro,setIntro]=useState(true)
 useEffect(()=>{const timer=setTimeout(()=>setIntro(false),1750);return()=>clearTimeout(timer)},[])
 useEffect(()=>{if(intro)return;const els=document.querySelectorAll('[data-reveal]');const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');ob.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -30px'});els.forEach(e=>ob.observe(e));return()=>ob.disconnect()},[intro])
 useEffect(()=>{const key=e=>e.key==='Escape'&&setOpen(null);window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[])

 return <>
  <div className={`intro-screen ${intro?'active':'leave'}`} aria-hidden={!intro}>
    <div className="intro-lockup"><h1>Samuella<span>.</span></h1><p>Lagos · Fashion model</p></div>
  </div>
  <div className={`site ${intro?'site-wait':''}`}>
   <header className="nav"><div className="nav-left"><a href="#portfolio">Portfolio</a><a href="#about">About</a></div><a className="brand" href="#top">SAMUELLA</a><div className="nav-right"><a href="#digitals">Digitals</a><a href="#bookings">Bookings</a></div></header>
   <main id="top">
    <section className="home-stage">
      <div className="home-collage" data-reveal>
        {homeCollage.map((item,i)=><Photo key={item.src} src={item.src} alt={item.alt} className={item.className} eager={i<3}/>)}
        <div className="collage-meta"><span>Lagos · Nigeria</span><strong>Model Portfolio</strong><a href="#portfolio">View work ↓</a></div>
      </div>
    </section>

    <section className="portfolio" id="portfolio"><div className="section-title" data-reveal><p className="section-kicker">01 / PORTFOLIO</p><h2>Selected <em>work.</em></h2><p>A focused edit across runway, editorial, beauty and fashion.</p></div><div className="portfolio-grid">{gallery.map((item,i)=><button className="portfolio-card" key={`${item.title}-${i}`} onClick={()=>setOpen(i)} data-reveal><Photo src={item.src} alt={`${item.title} — ${item.note}`}/><div className="card-label"><span>{item.title}</span><small>{item.note}</small></div></button>)}</div></section>

    <section className="about" id="about"><div className="about-inner" data-reveal><p className="section-kicker">02 / ABOUT</p><h2>Built for the frame.<br/><em>Ready for the brief.</em></h2><div className="about-copy"><p className="lead">Samuella is a Lagos-based fashion model with 2+ years of experience across runway, editorial, beauty and commercial work.</p><p>She brings composed runway presence, expressive movement and a clear understanding of visual direction to every production. Comfortable in both still and motion-led work, she adapts quickly to creative briefs while keeping the garment, image and brand story at the centre of the performance.</p><p>Her portfolio spans fashion shows, editorials, beauty imagery, campaigns and commercial work, with a professional approach built around preparation, collaboration and consistency on set.</p></div><div className="about-tags"><span>Runway</span><span>Editorial</span><span>Beauty</span><span>Campaigns</span><span>Commercial / TVC</span></div><a className="book-link" href="#bookings">Booking enquiries ↗</a></div></section>

    <section className="chapters"><div className="section-title compact" data-reveal><p className="section-kicker">03 / PORTFOLIO CHAPTERS</p><h2>Explore by <em>mood.</em></h2></div><div className="chapter-grid">{chapters.map(item=><a href="#portfolio" className="chapter-card" key={item.title} data-reveal><Photo src={item.image} alt={`${item.title} portfolio`}/><div><strong>{item.title}</strong><small>{item.subtitle}</small></div></a>)}</div></section>

    <section className="digitals" id="digitals"><div className="section-title compact" data-reveal><p className="section-kicker">04 / DIGITALS</p><h2>Clean. <em>Current.</em></h2></div><div className="digital-grid">{digitals.map(item=><figure key={item.src} data-reveal><Photo src={item.src} alt={`Samuella digital — ${item.label}`}/><figcaption>{item.label}</figcaption></figure>)}</div><div className="stats" data-reveal>{stats.map(([k,v])=><div key={k}><span>{k}</span><b>{v}</b></div>)}</div></section>

    <section className="experience" data-reveal><p className="section-kicker">05 / EXPERIENCE</p><div><h2>Selected credits.</h2><p className="credit-line">Lagos Fashion Week · BareFashion Evening · Nova Fashion Show</p><p className="label">BRANDS & COLLABORATIONS</p><p className="client-line">{clients.join(' · ')}</p></div></section>

    <section className="highlight" data-reveal><p className="section-kicker">06 / HIGHLIGHT</p><div><span>MISS MOTHERLAND NIGERIA 2025</span><h2>Best Runway <em>Model.</em></h2><p>Represented Cross River State at Miss Motherland Nigeria 2025 and received recognition as Best Runway Model.</p></div></section>

    <section className="bookings" id="bookings"><div data-reveal><p className="section-kicker">07 / BOOKINGS</p><h2>For castings, campaigns,<br/><em>editorials and runway.</em></h2><p>For availability, rates and project enquiries, contact Samuella directly by email or Instagram.</p></div><div className="contact-cards" data-reveal><a href="mailto:ezeogesamuella@gmail.com"><small>DIRECT BOOKING</small><strong>Email</strong><span>ezeogesamuella@gmail.com</span><i>↗</i></a><a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer"><small>PORTFOLIO & SOCIAL</small><strong>Instagram</strong><span>@yourgirl_samuella</span><i>↗</i></a></div></section>
   </main>
   <footer><span>© {new Date().getFullYear()} SAMUELLA</span><span>LAGOS · NIGERIA</span><a href="#top">BACK TO TOP ↑</a></footer>
   {open!==null&&<div className="lightbox" onClick={()=>setOpen(null)}><button className="close" aria-label="Close">×</button><div className="lightbox-inner" onClick={e=>e.stopPropagation()}><Photo src={gallery[open].src} alt={gallery[open].title}/><p>{gallery[open].title} · {gallery[open].note}</p></div></div>}
  </div>
 </>
}
createRoot(document.getElementById('root')).render(<App/>)