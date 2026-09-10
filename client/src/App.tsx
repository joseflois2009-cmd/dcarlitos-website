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

    <main>
      <section id="inicio" className="hero" style={{backgroundImage:`url(${heroImage})`}}><div className="hero-shade"/><div className="hero-content">
        <p className="eyebrow">RESTAURANTE CAMPESTRE</p><h1>D' Carlitos</h1><p className="hero-sub">Un Lugar Especial y Diferente</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#reservas">Reservar ahora</a><a className="btn btn-outline" href="#menu">Ver Menú</a></div>
      </div><a className="scroll-cue" href="#nosotros" aria-label="Desplazarse"><ArrowDown size={22}/></a></section>

      <section id="nosotros" className="essence section-muted"><div className="container"><p className="section-kicker">NUESTRA ESENCIA</p><h2>Una experiencia que va más allá del plato</h2><div className="feature-grid">{features.map(([title,body,icon])=><article className="feature" key={title}><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section id="menu" className="menu-section section-muted"><div className="container"><p className="section-kicker">NUESTRO MENÚ</p><h2>Platillos que enamoran</h2><div className="dish-grid">{dishes.map(([name,label,img])=><article className="dish" key={name}><div className="dish-image"><img src={img} alt={name}/><span>{label}</span></div><h3>{name}</h3></article>)}</div><a className="btn btn-primary menu-btn" href="#reservas">¡Quiero Probarlos! <ChevronRight size={17}/></a></div></section>

      <section className="reviews"><div className="container"><h2>Lo que dicen nuestros clientes</h2><p className="section-lead">Experiencias reales de familias que nos visitan cada fin de semana</p><div className="review-grid">{testimonials.map(([name,role,quote,seed])=><article className="review" key={name}><div className="review-stars">{[1,2,3,4,5].map(i=><Star key={i} size={15} fill="currentColor"/>)}</div><p>“{quote}”</p><div className="reviewer"><img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} alt={name}/><div><h3>{name}</h3><span>{role}</span></div></div></article>)}</div></div></section>

      <section id="reservas" className="reserve"><div className="container"><p className="section-kicker">RESERVACIONES</p><h2>¿Listo para una experiencia inolvidable?</h2><p>Reserva tu mesa hoy y disfruta de la mejor comida peruana en un ambiente único</p><a className="btn btn-primary" href="https://wa.me/51998389023" target="_blank" rel="noreferrer">Reservar mesa <ChevronRight size={17}/></a></div></section>
      <section className="find"><div className="container"><p className="section-kicker">ENCUÉNTRANOS</p><h2>Visítanos en nuestro restaurante campestre</h2><div className="find-grid"><div className="location-card"><div className="pin">⌖</div><h3>D' Carlitos</h3><p>Un Lugar Especial y Diferente</p><p>Restaurante Campestre, Ica, Perú</p><p>Sábados y Domingos</p></div><div className="map-art"><div className="map-road road-a"/><div className="map-road road-b"/><span>ICA</span><div className="map-pin">●</div></div></div></div></section>
    </main>

    <footer><div className="container footer-grid"><div><img className="footer-logo" src={logo} alt="D' Carlitos"/><p>Un Lugar Especial y Diferente</p><p>Restaurante Campestre, Ica, Perú</p><p>Sábados y Domingos</p></div><div><h4>Enlaces Rápidos</h4><a href="#inicio">Inicio</a><a href="#menu">Menú</a><a href="#reservas">Reservas</a><a href="#nosotros">Nosotros</a></div><div><h4>Contacto</h4><a href="tel:+51998389023">998 389 023</a><a href="tel:+51946139670">946 139 670</a><h4 className="follow">Síguenos</h4><div className="social"><a href="https://instagram.com/dcarlitoscampestre/" target="_blank" rel="noreferrer"><Instagram size={18}/></a><a href="https://tiktok.com/@dcarlitos.chincha" target="_blank" rel="noreferrer"><span className="tiktok">♪</span></a><a href="https://facebook.com/restaurantedcarlitos/" target="_blank" rel="noreferrer">f</a></div></div></div><div className="copyright">© 2025 D' Carlitos. Todos los derechos reservados.</div></footer>
    <a className="whatsapp" href="https://wa.me/51998389023" target="_blank" rel="noreferrer" aria-label="WhatsApp">◔</a>
  </div>
}
export default App;
