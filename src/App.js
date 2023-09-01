import React from 'react';

function App() {
  const bodyStyles = {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  };

  const headerStyles = {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem 0',
  };

  const navStyles = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
  };

  const navLiStyles = {
    margin: '0 1rem',
  };

  const navLinkStyles = {
    color: 'white',
    textDecoration: 'none',
  };

  const sectionStyles = {
    padding: '3rem 0',
    textAlign: 'center',
  };

  const menuItemStyles = {
    margin: '2rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const menuItemImageStyles = {
    maxWidth: '100%',
    borderRadius: '5px',
  };

  const contactFormStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const contactInputStyles = {
    marginBottom: '1rem',
    padding: '0.5rem',
  };

  const footerStyles = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
  };

  return (
    <div style={bodyStyles}>
      <header style={headerStyles}>
        <nav>
          <ul style={navStyles}>
            <li style={navLiStyles}><a href="#inicio" style={navLinkStyles}>Inicio</a></li>
            <li style={navLiStyles}><a href="#menu" style={navLinkStyles}>Menú</a></li>
            <li style={navLiStyles}><a href="#acerca" style={navLinkStyles}>Acerca de</a></li>
            <li style={navLiStyles}><a href="#contacto" style={navLinkStyles}>Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section style={sectionStyles} className="hero" id="inicio">
          <h1>Tortas Ahogadas Lupita</h1>
          <p>"En Lupita, te invitamos a descubrir una experiencia culinaria única, donde la calidad se fusiona con la tradición para ofrecerte las mejores tortas ahogadas de la ciudad. Nuestra dedicación a ingredientes frescos, sazón auténtico y pasión por la excelencia culinaria nos distingue como el destino definitivo para aquellos que buscan saborear lo mejor de la gastronomía local."</p>
        </section>
        <section style={sectionStyles} className="menu" id="menu">
          <h2>Nuestro Menú</h2>
          <div style={menuItemStyles} className="menu-item">
            <img src="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2022/10/torta-ahogada.jpg" alt="Torta Ahogada 1" style={menuItemImageStyles} />
            <h3>Torta Ahogada Clásica</h3>
            <p>Deliciosa torta ahogada con salsa picante y carnitas.</p>
          </div>
          <div style={menuItemStyles} className="menu-item">
            <img src="https://cdn2.cocinadelirante.com/sites/default/files/images/2023/08/torta-ahogada-de-camaron.jpg" alt="Torta Ahogada 2" style={menuItemImageStyles} />
            <h3>Torta Ahogada de Camarones</h3>
            <p>Torta ahogada rellena de camarones frescos y aguacate.</p>
          </div>
          {/* Add more menu items here */}
        </section>
        <section style={sectionStyles} className="about" id="acerca">
          <h2>Acerca de Nosotros</h2>
          <p>Con orgullo te presentamos a "Tortas Ahogadas Lupita", un tesoro gastronómico arraigado en el corazón de nuestra querida ciudad desde hace décadas. Esta legendaria casa de las tortas ahogadas fue fundada por la apasionada Lupita, una visionaria culinaria que dedicó su vida a perfeccionar esta deliciosa especialidad.

Nuestra historia se remonta a tiempos en los que las tortas ahogadas eran un auténtico tesoro culinario, pasando de generación en generación en nuestra familia. Lupita, con su amor por la cocina y su deseo de compartir esta delicia con el mundo, decidió abrir las puertas de su pequeño local en el corazón de la ciudad. Desde entonces, su nombre se ha convertido en sinónimo de calidad y sabor inigualables.

En "Tortas Ahogadas Lupita", honramos esa rica herencia todos los días. Cada bocado de nuestras tortas ahogadas es un tributo a la dedicación y pasión de Lupita por ofrecer autenticidad y calidad a nuestros queridos clientes. Con ingredientes frescos y una salsa secreta que ha sido perfeccionada durante generaciones, nuestras tortas ahogadas son irresistibles y te transportarán a los sabores tradicionales de nuestra ciudad.

Seguimos siendo un lugar donde la tradición culinaria se encuentra con la excelencia, y estamos encantados de continuar deleitando a los amantes de la buena comida con cada bocado de nuestras tortas ahogadas auténticas y llenas de historia. ¡Te invitamos a ser parte de nuestra historia y a disfrutar de esta experiencia culinaria única en "Tortas Ahogadas Lupita"!"</p>
        </section>
        <section style={sectionStyles} className="contact" id="contacto">
          <h2>Contacto</h2>
          <p>¡Contáctanos para realizar tu pedido o hacer una reserva!</p>
          <form id="contact-form" style={contactFormStyles}>
            <input type="text" placeholder="Nombre" required style={contactInputStyles} />
            <input type="email" placeholder="Correo Electrónico" required style={contactInputStyles} />
            <textarea placeholder="Mensaje" required style={contactInputStyles}></textarea>
            <button type="submit" style={contactInputStyles}>Enviar Mensaje</button>
          </form>
        </section>
      </main>
      <footer style={footerStyles}>
        <p>&copy; 2023 Tortas Ahogadas Lupita</p>
      </footer>
    </div>
  );
}

export default App;
