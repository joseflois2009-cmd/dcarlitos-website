import { useState } from "react";
import { ArrowDown, ChevronRight, Instagram, Menu, Phone, Star, X } from "lucide-react";

const heroImage = "https://res.cloudinary.com/dqv3jpzxg/image/upload/v1764903333/43c1d495-173e-41b8-b585-8409ba6ef086.png";
const logo = "https://res.cloudinary.com/dqv3jpzxg/image/upload/v1773542273/bc758076-97d3-4a02-9bd0-af28f5bf5a66_erqjtl.png";

const features = [
  ["Atención de Primera", "Nuestro equipo de mozos y ayudantes, de la reconocida agencia Los Ochoas, se encarga de cada detalle para brindarte una atención cálida, rápida y profesional, haciendo que cada visita sea cómoda y especial.", "✦"],
  ["Al Aire Libre", "Disfruta de amplios jardines rodeados de naturaleza, árboles y espacios abiertos donde cada momento se siente especial. Los fines de semana podrás vivir un ambiente único con show musical y cantantes en vivo que harán de tu visita una experiencia inolvidable.", "⌁"],
  ["Juegos Recreativos", "Diversión para grandes y pequeños. Contamos con juegos recreativos y espacios de entretenimiento para que disfrutes momentos inolvidables con tu familia en un ambiente lleno de alegría.", "♧"],
  ["Piscina Familiar", "Refresca tu día en nuestra amplia piscina, el lugar ideal para relajarte, disfrutar del clima y compartir momentos especiales con tu familia.", "◌"],
  ["Estacionamiento Amplio", "Pensamos en tu comodidad desde el momento en que llegas. Contamos con un amplio estacionamiento para que tu vehículo esté seguro mientras disfrutas tranquilamente de tu visita.", "⌖"],
  ["Granja Abierta al Público", "Conecta con la naturaleza visitando nuestra granja de animales, un espacio pensado para que niños y adultos vivan una auténtica experiencia campestre.", "♙"],
];
const dishes = [
  ["Carapulcra con Sopa Seca y Chicharrón", "Especialidad", "https://d-carlitos-web-launch.vercel.app/assets/combinado-criollo-C9MkQBuq.jpg"],
  ["Pollo a la Plancha", "Saludable", "https://d-carlitos-web-launch.vercel.app/assets/chicharron-5bqn_BlH.jpg"],
  ["Torta de Vainilla", "Postre", "https://d-carlitos-web-launch.vercel.app/assets/papa-huancaina-WTWhCQrd.jpg"],
];
const testimonials = [
  ["María García", "Cliente frecuente", "El mejor lugar para disfrutar en familia. La comida es deliciosa y las áreas verdes son perfectas para los niños.", "Maria"],
  ["Carlos Mendoza", "Celebración familiar", "Celebramos el cumpleaños de mi madre aquí y fue una experiencia inolvidable. El servicio y la atención fueron excepcionales.", "Carlos"],
  ["Ana López", "Primera visita", "La carapulcra con sopa seca es espectacular. Sin duda volveremos cada fin de semana.", "Ana"],
  ["Roberto Sánchez", "Cliente habitual", "El ambiente campestre es único. Se respira paz y tranquilidad mientras disfrutas de platos tradicionales peruanos.", "Roberto"],
  ["Lucía Fernández", "Reunión de amigos", "Excelente lugar para reunirse con amigos. La música en vivo le da un toque especial a la experiencia.", "Lucia"],
];
const visitHighlights = [
  ["Llegas sin apuro", "Deja atrás la ciudad y encuentra un espacio amplio, fresco y rodeado de naturaleza para pasar el día.", "01"],
  ["Eliges tu momento", "Una mesa para conversar, áreas verdes para los niños y rincones para disfrutar a tu propio ritmo.", "02"],
  ["Te quedas por la experiencia", "Platos peruanos, piscina, juegos y música en vivo para que el almuerzo se convierta en un plan completo.", "03"],
];

function App() {
  const [open, setOpen] = useState(false);
  const go = () => setOpen(false);
  return <div className="site">
    <nav className="nav"><div className="nav-inner">
      <a href="#inicio" className="brand" onClick={go}><img src={logo} alt="D' Carlitos Logo" /></a>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#inicio" onClick={go}>Inicio</a><a href="#menu" onClick={go}>Menú</a><a href="#nosotros" onClick={go}>Nosotros</a>
        <a className="nav-cta" href="#reservas" onClick={go}><Phone size={15}/> Reservar Mesa</a>
      </div>
      <button className="mobile-menu" aria-label="Abrir menú" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div></nav>

    <div className="conversion-bar"><span>Este fin de semana te esperamos en D' Carlitos</span><a href="#reservas">Reserva tu mesa <ChevronRight size={14}/></a></div>
    <main>
      <section id="inicio" className="hero" style={{backgroundImage:`url(${heroImage})`}}><div className="hero-shade"/><div className="hero-content">
        <p className="eyebrow">RESTAURANTE CAMPESTRE · ICA</p><h1>Un lugar para<br/><em>disfrutar de verdad</em></h1><p className="hero-sub">Comida peruana, naturaleza y momentos que todos recordarán.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#reservas">Quiero visitar</a><a className="btn btn-outline" href="#experiencia">Conoce el lugar</a></div><p className="hero-proof"><Star size={15} fill="currentColor"/> Un plan diferente para compartir en familia</p>
      </div><a className="scroll-cue" href="#nosotros" aria-label="Desplazarse"><ArrowDown size={22}/></a></section>

      <section className="visit-strip"><div className="container visit-strip-inner"><div><span className="strip-label">TU PRÓXIMO PLAN</span><strong>Un domingo que sí se disfruta</strong></div><div className="strip-fact"><span>01</span><p><b>Sábados y domingos</b><br/>Ven a pasar el día con los tuyos</p></div><div className="strip-fact"><span>02</span><p><b>Para todas las edades</b><br/>Comida, naturaleza y entretenimiento</p></div><a href="#reservas" className="strip-link">Reserva tu mesa <ChevronRight size={15}/></a></div></section>

      <section id="nosotros" className="essence section-muted"><div className="container"><p className="section-kicker">NUESTRA ESENCIA</p><h2>Una experiencia que va más allá del plato</h2><div className="feature-grid">{features.map(([title,body,icon])=><article className="feature" key={title}><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section id="experiencia" className="events"><div className="container"><p className="section-kicker">ASÍ SE VIVE</p><h2>Más que un almuerzo,<br/><em>un día para recordar</em></h2><p className="section-lead">Aquí vienes a comer rico, respirar aire fresco y disfrutar el tiempo con tu familia y amigos.</p><div className="event-grid">{visitHighlights.map(([title,body,icon])=><article className="event-card" key={title}><div className="event-number">{icon}</div><h3>{title}</h3><p>{body}</p><a href="#menu">Ver el menú <ChevronRight size={15}/></a></article>)}</div></div></section>

      <section id="menu" className="menu-section section-muted"><div className="container"><p className="section-kicker">NUESTRO MENÚ</p><h2>Platillos que enamoran</h2><div className="dish-grid">{dishes.map(([name,label,img])=><article className="dish" key={name}><div className="dish-image"><img src={img} alt={name}/><span>{label}</span></div><h3>{name}</h3></article>)}</div><a className="btn btn-primary menu-btn" href="#reservas">¡Quiero Probarlos! <ChevronRight size={17}/></a></div></section>

      <section className="reviews"><div className="container"><h2>Lo que dicen nuestros clientes</h2><p className="section-lead">Experiencias reales de familias que nos visitan cada fin de semana</p><div className="review-grid">{testimonials.map(([name,role,quote,seed])=><article className="review" key={name}><div className="review-stars">{[1,2,3,4,5].map(i=><Star key={i} size={15} fill="currentColor"/>)}</div><p>“{quote}”</p><div className="reviewer"><img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} alt={name}/><div><h3>{name}</h3><span>{role}</span></div></div></article>)}</div></div></section>

      <section id="reservas" className="reserve"><div className="container reserve-inner"><div><p className="section-kicker">TE ESTAMOS ESPERANDO</p><h2>Reserva tu mesa y ven a disfrutar</h2><p>Escríbenos para asegurar tu mesa este fin de semana. También contamos con un espacio independiente para eventos sociales y corporativos.</p></div><div className="reserve-actions"><a className="btn btn-primary" href="https://wa.me/51998389023?text=Hola%20D%27%20Carlitos%2C%20quiero%20reservar%20una%20mesa%20para%20visitar%20el%20restaurante." target="_blank" rel="noreferrer">Reservar mi mesa <ChevronRight size={17}/></a><span>Respuesta rápida · 998 389 023</span><a className="event-note" href="https://wa.me/51998389023?text=Hola%20D%27%20Carlitos%2C%20quiero%20informaci%C3%B3n%20sobre%20eventos." target="_blank" rel="noreferrer">¿Planeas un evento? Consúltanos</a></div></div></section>
      <section className="find"><div className="container"><p className="section-kicker">ENCUÉNTRANOS</p><h2>Visítanos en nuestro restaurante campestre</h2><div className="find-grid"><div className="location-card"><div className="pin">⌖</div><h3>D' Carlitos</h3><p>Un Lugar Especial y Diferente</p><p>Restaurante Campestre, Ica, Perú</p><p>Sábados y Domingos</p></div><div className="map-art"><div className="map-road road-a"/><div className="map-road road-b"/><span>ICA</span><div className="map-pin">●</div></div></div></div></section>
    </main>

    <footer><div className="container footer-grid"><div><img className="footer-logo" src={logo} alt="D' Carlitos"/><p>Un Lugar Especial y Diferente</p><p>Restaurante Campestre, Ica, Perú</p><p>Sábados y Domingos</p></div><div><h4>Enlaces Rápidos</h4><a href="#inicio">Inicio</a><a href="#menu">Menú</a><a href="#reservas">Reservas</a><a href="#nosotros">Nosotros</a></div><div><h4>Contacto</h4><a href="tel:+51998389023">998 389 023</a><a href="tel:+51946139670">946 139 670</a><h4 className="follow">Síguenos</h4><div className="social"><a href="https://instagram.com/dcarlitoscampestre/" target="_blank" rel="noreferrer"><Instagram size={18}/></a><a href="https://tiktok.com/@dcarlitos.chincha" target="_blank" rel="noreferrer"><span className="tiktok">♪</span></a><a href="https://facebook.com/restaurantedcarlitos/" target="_blank" rel="noreferrer">f</a></div></div></div><div className="copyright">© 2025 D' Carlitos. Todos los derechos reservados.</div></footer>
    <a className="whatsapp" href="https://wa.me/51998389023" target="_blank" rel="noreferrer" aria-label="WhatsApp">◔</a>
  </div>
}
export default App;
