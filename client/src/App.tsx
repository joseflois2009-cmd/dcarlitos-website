import { useEffect, useState } from "react";
import { ArrowDown, ChevronRight, Instagram, Menu, Phone, Star, X } from "lucide-react";

const heroImages = [
  "https://res.cloudinary.com/dqv3jpzxg/image/upload/v1764903333/43c1d495-173e-41b8-b585-8409ba6ef086.png",
  "/manus-storage/hero-juegos_d4e2f0da.jpg",
  "/manus-storage/hero-atencion_8e6c41f0.jpg",
];
const logo = "/manus-storage/dcarlitos-logo-oficial_571ed369.png";

const essenceCards = [
  ["Aire libre de verdad", "Jardines, sombra y espacio para desconectarte de la rutina.", "https://res.cloudinary.com/hpg2hzc4/image/upload/v1789167648/12c9b26c-af77-4b66-8e29-9869ed13eb42.jpg", "Imagen de áreas verdes y aire libre en D' Carlitos"],
  ["Un plan para todos", "Juegos, piscina y naturaleza para que cada integrante disfrute a su manera.", "https://res.cloudinary.com/hpg2hzc4/image/upload/v1789167626/a97ff5b4-39e4-4b41-a282-51a86d4a616f.jpg", "Imagen de una experiencia familiar en D' Carlitos"],
  ["Sabor que se comparte", "Platos peruanos servidos para conversar, celebrar y quedarse un poco más.", "https://res.cloudinary.com/hpg2hzc4/image/upload/v1789167604/WhatsApp_Image_2026-09-11_at_5.54.51_PM.jpg", "Imagen de gastronomía peruana de D' Carlitos"],
];
const dishes = [
  ["Carapulcra con Sopa Seca y Chicharrón", "Especialidad", "https://d-carlitos-web-launch.vercel.app/assets/combinado-criollo-C9MkQBuq.jpg"],
  ["Pollo a la Plancha", "Saludable", "https://d-carlitos-web-launch.vercel.app/assets/chicharron-5bqn_BlH.jpg"],
  ["Torta de Vainilla", "Postre", "https://d-carlitos-web-launch.vercel.app/assets/papa-huancaina-WTWhCQrd.jpg"],
];
const testimonials = [
  ["Pedro Antonio Falco Martinez", "5 estrellas · Hace 3 años", "Excelente restaurante campestre con buenas instalaciones, buena comida a precio razonable.", "Pedro", 5],
  ["Jorge Garcia", "5 estrellas · Hace 8 meses", "Excelente servicio, platos variados y muy bien preparados y un excelente ambiente rodeado de muchas áreas verdes.", "Jorge", 5],
  ["Elizabeth C", "5 estrellas · Hace 2 años", "Fuimos en Semana Santa, buena música, decidimos este lugar porque es pet friendly. Estuvo riquísimo el arroz con pato; sin embargo el plato con carapulcra debe mejorar su sabor. Por lo demás: hay piscina, el ambiente espectacular, amplio, hay juegos para niños y parking gratis.", "Elizabeth", 5],
  ["Emily Ibarra", "4 estrellas · Hace 4 años", "Buen servicio y super rápida la atención. Espacio al aire libre para poder disfrutar de la naturaleza.", "Emily", 4],
  ["Christian Gutiérrez", "4 estrellas · Hace 3 meses", "En días festivos tienes que ir temprano, medio día de preferencia, se ha hecho muy conocido y se llena.", "Christian", 4],
  ["José Rubio", "5 estrellas · Hace 9 meses", "Es un bonito lugar para pasarla en familia, hay juegos para niños, hay animalitos, el servicio es rápido, la comida es muy buena, recomiendo 100% este lugar cuando vayas a Chincha.", "Jose", 5],
  ["Edwin Onofre", "4 estrellas · Hace un año", "Muy buen lugar, pero es un poco alejado a la vía principal.", "Edwin", 4],
  ["Alonso Matamoros", "5 estrellas · Hace 9 meses", "Buenos y ricos platos, lugar agradable para un buen almuerzo.", "Alonso", 5],
];
const visitHighlights = [
  ["Llegas sin apuro", "Deja atrás la ciudad y encuentra un espacio amplio, fresco y rodeado de naturaleza para pasar el día.", "01"],
  ["Eliges tu momento", "Una mesa para conversar, áreas verdes para los niños y rincones para disfrutar a tu propio ritmo.", "02"],
  ["Te quedas por la experiencia", "Platos peruanos, piscina, juegos y música en vivo para que el almuerzo se convierta en un plan completo.", "03"],
];

function App() {
  const [open, setOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const go = () => setOpen(false);
  useEffect(() => {
    const root = document.documentElement;
    const move = (event: MouseEvent) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  useEffect(() => {
    const timer = window.setInterval(() => setHeroIndex((current) => (current + 1) % heroImages.length), 7000);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="site">
    <nav className="nav"><div className="nav-inner">
      <a href="#inicio" className="brand" onClick={go}><img src={logo} alt="D' Carlitos Logo" /></a>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#inicio" onClick={go}>Inicio</a><a href="#nosotros" onClick={go}>Nosotros</a>
      </div>
      <button className="mobile-menu" aria-label="Abrir menú" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div></nav>

    <div className="conversion-bar"><span>Este fin de semana te esperamos en D' Carlitos</span><a href="#reservas">Reserva tu mesa <ChevronRight size={14}/></a></div>
    <main>
      <section id="inicio" className="hero" style={{backgroundImage:`url(${heroImages[heroIndex]})`}}><div className="hero-shade"/><div className="hero-orb"/><div className="hero-content">
        <p className="eyebrow">D' CARLITOS · SUNAMPE, ICA</p><h1>Un día para<br/><em>comer, respirar y quedarse.</em></h1><p className="hero-sub">Una mesa entre jardines, platos peruanos y el tiempo que se disfruta mejor en compañía.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#reservas">Reservar una mesa</a><a className="btn btn-outline" href="#experiencia">Descubrir la experiencia</a></div><p className="hero-proof"><Star size={15} fill="currentColor"/> El plan campestre que empieza en la mesa</p>
      </div><div className="hero-dots" aria-label="Imágenes del hero">{heroImages.map((_, index)=><button key={index} className={heroIndex === index ? "active" : ""} onClick={() => setHeroIndex(index)} aria-label={`Ver imagen ${index + 1}`} />)}</div><a className="scroll-cue" href="#nosotros" aria-label="Desplazarse"><ArrowDown size={22}/></a></section>

      <section className="visit-strip"><div className="container visit-strip-inner"><div><span className="strip-label">TU PRÓXIMA VISITA</span><strong>Hazle espacio a un buen día</strong></div><div className="strip-fact"><span>01</span><p><b>Sábados y domingos</b><br/>Una mesa lista para compartir</p></div><div className="strip-fact"><span>02</span><p><b>Visita o celebra</b><br/>Restaurante abierto y eventos a medida</p></div><a href="#reservas" className="strip-link">Separar una mesa <ChevronRight size={15}/></a></div></section>

      <section id="nosotros" className="essence section-muted"><div className="container essence-heading"><div><p className="section-kicker">NUESTRA ESENCIA</p><h2>Vienes por la comida.<br/><em>Te quedas por el día.</em></h2></div></div><div className="container essence-grid">{essenceCards.map(([title,body,img,alt])=><article className="essence-card" key={title} style={{backgroundImage:`linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.78)),url(${img})`}} aria-label={alt}><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>

      <section id="experiencia" className="events"><div className="container"><p className="section-kicker">ASÍ SE VIVE</p><h2>Más que un almuerzo,<br/><em>un día para recordar</em></h2><p className="section-lead">Aquí vienes a comer rico, respirar aire fresco y disfrutar el tiempo con tu familia y amigos.</p><div className="event-grid">{visitHighlights.map(([title,body,icon])=><article className="event-card" key={title}><div className="event-number">{icon}</div><h3>{title}</h3><p>{body}</p><a href="#reservas">Planifica tu visita <ChevronRight size={15}/></a></article>)}</div></div></section>

      <section id="menu" className="menu-section section-muted"><div className="container menu-heading"><div><p className="section-kicker">PARA EMPEZAR A ANTOJARTE</p><h2>Favoritos de la casa</h2></div></div><div className="container dish-grid">{dishes.map(([name,label,img], index)=><article className="dish" key={name}><div className="dish-image"><img src={img} alt={name}/><span>{label}</span><b className="dish-index">0{index + 1}</b></div><div className="dish-copy"><h3>{name}</h3><p>Preparado para disfrutarlo sin apuro.</p></div></article>)}</div><div className="menu-footer"><span>¿Ya se te antojó?</span><a className="btn btn-primary menu-btn" href="#reservas">Ven a probarlo <ChevronRight size={17}/></a></div></section>

      <section className="reviews"><div className="container"><h2>Lo que dicen nuestros clientes</h2><p className="section-lead">Experiencias reales de familias que nos visitan cada fin de semana</p><div className="review-viewport" aria-label="Reseñas de clientes desplazándose automáticamente"><div className="review-track">{[...testimonials, ...testimonials].map(([name,role,quote,seed,rating], index)=><article className="review review-slide" key={`${name}-${index}`}><div className="review-stars">{[1,2,3,4,5].map(i=><Star key={i} size={15} fill={i <= Number(rating) ? "currentColor" : "none"}/>)}</div><p>“{quote}”</p><div className="reviewer"><img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${String(seed)}`} alt={String(name)}/><div><h3>{String(name)}</h3><span>{String(role)}</span></div></div></article>)}</div></div></div></section>

      <section id="reservas" className="reserve"><div className="container"><div className="reserve-head"><div><p className="section-kicker">RESERVAS</p><h2>Haz espacio para<br/><em>un buen día.</em></h2></div></div><div className="reserve-grid"><article className="reserve-card reserve-card-main"><span className="reserve-number">01</span><div><h3>Reservar una mesa</h3><p>Ven con tu familia, pareja o amigos y asegura tu lugar para disfrutar del restaurante.</p><a className="reserve-action reserve-action-primary" href="https://wa.me/51946139670?text=Hola%20quiero%20reservar%20una%20mesa%20para%20visitar%20el%20restaurante." target="_blank" rel="noreferrer">Reservar mi mesa <ChevronRight size={17}/></a></div></article><article className="reserve-card reserve-card-event"><span className="reserve-number">02</span><div><span className="card-overline">EVENTOS</span><h3>Consultar un evento</h3><p>Un espacio independiente para celebraciones familiares y encuentros corporativos.</p><a className="reserve-action reserve-action-secondary" href="https://wa.me/51946139670?text=Hola%20Sr%27%20Carlos%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20evento." target="_blank" rel="noreferrer">Consultar disponibilidad <ChevronRight size={17}/></a></div></article></div></div></section>
      <section className="find"><div className="container"><div className="find-heading"><div><p className="section-kicker">ENCUÉNTRANOS</p><h2>El mejor plan<br/><em>está más cerca de lo que crees</em></h2></div></div><div className="find-grid find-grid-map"><div className="map-frame"><iframe title="Ubicación de Restaurante Campestre D' Carlitos" src="https://www.google.com/maps?q=Restaurante%20Campestre%20D%27Carlitos%2C%20C.%20Magnolias%20691%2C%20Sunampe%2011702&output=embed" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></div></section>
    </main>

    <footer><div className="container footer-grid"><div className="footer-brand"><img className="footer-logo" src={logo} alt="D' Carlitos"/><h3>Un Lugar Especial y Diferente</h3><p>Restaurante campestre en Sunampe, Ica.</p><p className="footer-days">Sábados y domingos</p><a className="footer-map-link" href="https://maps.app.goo.gl/xmhj5GmTanUcYP9q7" target="_blank" rel="noreferrer">Ver ubicación <ChevronRight size={14}/></a></div><div><h4>Explora</h4><a href="#inicio">Inicio</a><a href="#experiencia">La experiencia</a><a href="#menu">Favoritos de la casa</a><a href="#nosotros">Nuestra esencia</a></div><div><h4>Contacto</h4><a className="footer-phone" href="tel:+51946139670">946 139 670</a><a href="https://maps.app.goo.gl/xmhj5GmTanUcYP9q7" target="_blank" rel="noreferrer">Cómo llegar</a><h4 className="follow">Síguenos</h4><div className="social"><a href="https://instagram.com/dcarlitoscampestre/" target="_blank" rel="noreferrer"><Instagram size={18}/></a><a href="https://tiktok.com/@dcarlitos.chincha" target="_blank" rel="noreferrer"><span className="tiktok">♪</span></a><a href="https://facebook.com/restaurantedcarlitos/" target="_blank" rel="noreferrer">f</a></div></div></div><div className="copyright"><span>© 2025 D' Carlitos.</span><span>Restaurante Campestre en Sunampe, Ica</span></div></footer>
    <a className="whatsapp" href="https://wa.me/51946139670" target="_blank" rel="noreferrer" aria-label="WhatsApp">◔</a>
  </div>
}
export default App;
