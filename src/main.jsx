import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const stats=[['Height','175 cm'],['Bust','32 in'],['Waist','28 in'],['Hips','36 in'],['Shoe','EU 42'],['Eyes','Brown'],['Hair','Black']]
const gallery=[
{src:'/images/pics/IMG-20250713-WA0121.jpg',title:'Runway',note:'Fashion shows & presentations'},
{src:'/images/pics/IMG-20250801-WA0154.jpg',title:'Beauty',note:'Beauty & portrait'},
{src:'/images/pics/I38A9558.jpg',title:'Editorial',note:'Editorial storytelling'},
{src:'/images/pics/IMG_0984.JPG',title:'Fashion',note:'Designer looks & lookbooks'},
{src:'/images/pics/IMG_4210.JPG',title:'Campaign',note:'Brand & creative campaigns'},
{src:'/images/pics/IMG_6031.JPG',title:'Commercial',note:'TVC & commercial work'}]
const digitals=[
{src:'/images/pics/IMG_0511.JPG',label:'Three-quarter'},
{src:'/images/pics/IMG_0512.JPG',label:'Full length'},
{src:'/images/pics/IMG_0510.JPG',label:'Full length'},
{src:'/images/pics/IMG_0519.JPG',label:'Portrait'},
{src:'/images/pics/IMG_0518.JPG',label:'Profile'}]
const clients=['SassyByEtty','Amostafiri','Awotiwa','The Dust of the Earth','Darling Hair']

function Photo({src,alt,eager=false}){return <div className="photo"><img src={src} alt={alt} loading={eager?'eager':'lazy'} decoding="async" fetchPriority={eager?'high':'auto'}/></div>}

function App(){
 const [open,setOpen]=useState(null); const [intro,setIntro]=useState(true)
 useEffect(()=>{const timer=setTimeout(()=>setIntro(false),1900);return()=>clearTimeout(timer)},[])
 useEffect(()=>{if(intro)return;const els=document.querySelectorAll('[data-reveal]');const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');ob.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -35px'});els.forEach(e=>ob.observe(e));return()=>ob.disconnect()},[intro])
 useEffect(()=>{const key=e=>e.key==='Escape'&&setOpen(null);addEventListener('keydown',key);return()=>removeEventListener('keydown',key)},[])
 return <>
  <div className={`intro-screen ${intro?'active':'leave'}`} aria-hidden={!intro}><div><h1>Samuella</h1><p>MODEL · CREATIVE · STORYTELLER</p></div></div>
  <div className={`site ${intro?'site-wait':''}`}>
   <header className="nav"><a className="brand" href="#top">SAMUELLA</a><nav><a href="#portfolio">Portfolio</a><a href="#about">About</a><a href="#digitals">Digitals</a><a href="#bookings">Bookings</a></nav><a className="instagram" href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer">Instagram ↗</a></header>
   <main id="top">
    <section className="home"><div className="home-copy" data-reveal><p className="eyebrow">LAGOS · NIGERIA</p><h1>Fashion model.<br/><em>Distinct presence.</em></h1><p>Runway · Editorial · Beauty · Commercial</p><a href="#portfolio">View portfolio ↓</a></div></section>

    <section className="portfolio" id="portfolio"><div className="section-head" data-reveal><p className="section-kicker">01 / PORTFOLIO</p><div><h2>Selected <em>work.</em></h2><p>A considered selection of runway, beauty, editorial, fashion and commercial work.</p></div></div><div className="portfolio-grid">{gallery.map((item,i)=><button className="portfolio-card" key={item.title} onClick={()=>setOpen(i)} data-reveal><Photo src={item.src} alt={`${item.title} portfolio`}/><span className="card-label">{item.title}</span><small>{item.note}</small></button>)}</div></section>

    <section className="about" id="about"><div className="about-copy" data-reveal><p className="section-kicker">02 / ABOUT</p><h2>Presence, poise,<br/>and a <em>distinct</em><br/>visual language.</h2><p className="lead">Samuella is a Lagos-based fashion model with 2+ years of experience across runway, editorial, beauty and commercial work.</p><p>Expressive and versatile, she brings intention to movement and understands how to translate a creative direction into a strong frame. Her approach is professional, collaborative and detail-aware — whether she is walking a runway, building a beauty story or representing a brand on camera.</p><p>Available for editorials, campaigns, lookbooks, beauty, runway, commercial/TVC projects and selected creative collaborations.</p><div className="about-links"><a href="#bookings">BOOK SAMUELLA ↗</a><a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a></div></div><Photo src="/images/pics/I38A9643.jpg" alt="Samuella fashion portrait"/></section>

    <section className="digitals" id="digitals"><div className="digital-intro" data-reveal><p className="section-kicker">03 / DIGITALS</p><h2>Clean. <em>Current.</em></h2><p>Natural casting images showing profile, proportions and presence.</p></div><div className="digital-strip">{digitals.map((item,i)=><figure key={item.label+i} data-reveal><Photo src={item.src} alt={`Samuella digital ${item.label}`}/><figcaption>{item.label}</figcaption></figure>)}</div><div className="stats" data-reveal>{stats.map(([k,v])=><div key={k}><span>{k}</span><b>{v}</b></div>)}</div></section>

    <section className="experience"><p className="section-kicker" data-reveal>04 / EXPERIENCE</p><div data-reveal><h2>Runway to <em>editorial.</em></h2><p className="credit-line">Lagos Fashion Week · BareFashion Evening · Nova Fashion Show</p><p className="label">SELECTED BRANDS & COLLABORATIONS</p><p className="client-line">{clients.join(' · ')}</p></div></section>

    <section className="highlight"><div data-reveal><p className="section-kicker">05 / HIGHLIGHT</p><span>MISS MOTHERLAND NIGERIA 2025</span><h2>Best Runway <em>Model.</em></h2><p>Represented Cross River State at Miss Motherland Nigeria 2025 and received recognition as Best Runway Model.</p></div></section>

    <section className="bookings" id="bookings"><div data-reveal><p className="section-kicker">06 / BOOKINGS</p><h2>Available for editorials,<br/><em>campaigns, beauty,</em> and<br/>special projects.</h2><p>For bookings, collaborations and casting enquiries, reach out via email or Instagram.</p></div><div className="contact-cards" data-reveal><a href="mailto:ezeogesamuella@gmail.com"><small>BOOKING INQUIRIES</small><strong>Email</strong><span>ezeogesamuella@gmail.com</span><i>↗</i></a><a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer"><small>PORTFOLIO & SOCIAL</small><strong>Instagram</strong><span>@yourgirl_samuella</span><i>↗</i></a></div></section>
   </main>
   <footer><span>© {new Date().getFullYear()} SAMUELLA</span><span>LAGOS · NIGERIA</span><a href="#top">BACK TO TOP ↑</a></footer>
   {open!==null&&<div className="lightbox" onClick={()=>setOpen(null)}><button className="close" aria-label="Close">×</button><div className="lightbox-inner" onClick={e=>e.stopPropagation()}><Photo src={gallery[open].src} alt={gallery[open].title}/><p>{gallery[open].title} · {gallery[open].note}</p></div></div>}
  </div>
 </>
}
createRoot(document.getElementById('root')).render(<App/>)