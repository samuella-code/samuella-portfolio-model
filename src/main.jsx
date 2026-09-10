import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { heroImage, polaroidImage } from './featuredImages'

const stats = [['Height','175 cm'],['Bust','32 in'],['Waist','28 in'],['Hips','36 in'],['Dress','8'],['Shoe','42'],['Eyes','Brown'],['Hair','Black']]
const work = [
  {title:'Runway',note:'Lagos Fashion Week · BareFashion Evening · Nova Fashion Show',image:'/images/runway-01.jpg'},
  {title:'Editorial',note:'Fashion · Beauty · Storytelling',image:'/images/editorial-01.jpg'},
  {title:'Fashion',note:'Designer showcases · Lookbooks',image:'/images/fashion-01.jpg'},
  {title:'Campaign',note:'Creative collaborations · Brand work',image:'/images/campaign-01.jpg'},
]
const clients=['SassyByEtty','Amostafiri','Awotiwa','The Dust of the Earth','Darling Hair']
const bookingTypes=['Editorial','Runway','Campaign','Commercial / TVC','Photoshoot','Fashion show','Beauty','Creative collaboration','Other']

function Photo({src,alt,className=''}){return <div className={`photo ${className}`}><img src={src} alt={alt} onError={e=>{e.currentTarget.style.display='none';e.currentTarget.parentElement.classList.add('missing')}}/><span className="photo-fallback">Selected work</span></div>}

function App(){
 useEffect(()=>{const els=document.querySelectorAll('[data-reveal]');const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});els.forEach(el=>o.observe(el));return()=>o.disconnect()},[])
 const handleBooking=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent(`Booking enquiry — ${f.get('name')}`);const body=encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}\nProject: ${f.get('type')}\nDate: ${f.get('date')||'Not specified'}\nLocation: ${f.get('location')||'Not specified'}\n\n${f.get('message')}`);location.href=`mailto:ezeogesamuella@gmail.com?subject=${subject}&body=${body}`}
 return <div className="site">
  <header className="nav"><a className="logo" href="#top">SAMUELLA</a><nav><a href="#work">Portfolio</a><a href="#about">About</a><a href="#digitals">Digitals</a><a href="#booking" className="book-link">Book</a></nav></header>
  <main id="top">
   <section className="hero">
    <Photo src={heroImage} alt="Samuella model portrait" className="hero-photo"/>
    <div className="hero-overlay"><p className="kicker">LAGOS · NIGERIA</p><h1>Samuella</h1><div className="hero-bottom"><p>Model · Creative</p><a href="#work">View portfolio <span>↘</span></a></div></div>
   </section>

   <section className="intro" id="about" data-reveal>
    <p className="section-no">01 / ABOUT</p>
    <div><h2>Presence in every<br/><em>frame.</em></h2><p className="lead">Samuella is a Lagos-based fashion model working across runway, editorial, beauty and commercial projects.</p><p>With 2+ years of modelling experience, she brings a composed presence, expressive movement and professionalism to every set and runway — adapting to the story while keeping a distinct point of view.</p><a className="under-link" href="#booking">Work with Samuella ↗</a></div>
   </section>

   <section className="portfolio" id="work">
    <div className="portfolio-head" data-reveal><p className="section-no">02 / PORTFOLIO</p><h2>Selected <em>work.</em></h2></div>
    <div className="masonry">
     {work.map((w,i)=><article className={`work w${i+1}`} key={w.title} data-reveal><Photo src={w.image} alt={`${w.title} work`}/><div className="caption"><span>{String(i+1).padStart(2,'0')} · {w.title}</span><span>{w.note}</span></div></article>)}
    </div>
    <p className="upload-note">Portfolio image slots are ready for the rest of your uploaded runway and editorial photographs.</p>
   </section>

   <section className="digitals" id="digitals">
    <div className="digital-copy" data-reveal><p className="section-no">03 / DIGITALS</p><h2>Clean.<br/><em>Current.</em></h2><p>Natural casting images showing profile, proportions and presence. Available for casting and fitting requests.</p></div>
    <Photo src={polaroidImage} alt="Samuella model digital" className="digital-photo"/>
    <div className="stats" data-reveal>{stats.map(([k,v])=><div className="stat" key={k}><span>{k}</span><strong>{v}</strong></div>)}</div>
   </section>

   <section className="experience" data-reveal>
    <p className="section-no">04 / EXPERIENCE</p>
    <div className="experience-main"><h2>Runway to<br/><em>editorial.</em></h2><div className="credits"><div><span>Runway</span><p>Lagos Fashion Week<br/>BareFashion Evening<br/>Nova Fashion Show</p></div><div><span>Selected collaborations</span><p>{clients.join(' · ')}</p></div></div></div>
   </section>

   <section className="highlight">
    <div data-reveal><p className="section-no light">05 / HIGHLIGHT</p><p className="tiny">MISS MOTHERLAND NIGERIA 2025</p><h2>Best Runway<br/><em>Model.</em></h2><p>Represented Cross River State at Miss Motherland Nigeria 2025 and received recognition as Best Runway Model.</p></div>
   </section>

   <section className="booking" id="booking">
    <div className="booking-copy" data-reveal><p className="section-no">06 / BOOKINGS</p><h2>Let's make<br/><em>something.</em></h2><p>Available for runway, editorials, campaigns, beauty, commercial work and creative collaborations.</p><div className="contact"><a href="mailto:ezeogesamuella@gmail.com">ezeogesamuella@gmail.com ↗</a><a href="https://www.instagram.com/yourgirl_samuella/" target="_blank" rel="noreferrer">Instagram @yourgirl_samuella ↗</a><span>Lagos, Nigeria</span></div></div>
    <form onSubmit={handleBooking} data-reveal><div className="two"><label>Name<input name="name" required placeholder="Your name / brand"/></label><label>Email<input name="email" type="email" required placeholder="hello@brand.com"/></label></div><label>Project<select name="type" required><option value="">Select project type</option>{bookingTypes.map(x=><option key={x}>{x}</option>)}</select></label><div className="two"><label>Date<input name="date" type="date"/></label><label>Location<input name="location" placeholder="City / country"/></label></div><label>Project details<textarea name="message" required rows="4" placeholder="Tell me about the project, usage, call time and deliverables..."/></label><button>Send enquiry <span>↗</span></button></form>
   </section>
  </main>
  <footer><a href="#top" className="logo">SAMUELLA</a><span>Model · Lagos, Nigeria</span><a href="#top">Back to top ↑</a></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>)