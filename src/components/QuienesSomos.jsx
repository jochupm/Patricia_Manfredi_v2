import React from 'react';
import '/Users/josep/Web_Development/Patricia_Manfredi/style/QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      {/* Sección de bienvenida */}
      <section className="intro-section">
        <h1 className="title">Quiénes Somos</h1>
        <p className="intro-text">
          Bienvenidos a [Nombre de la Empresa], donde nos apasiona [breve descripción de la empresa, como "inspirar y empoderar a nuestros estudiantes"]. Nuestra misión es brindar educación de alta calidad y apoyo constante a todos los que buscan desarrollarse en [campo o industria].
        </p>
      </section>

      {/* Sección de historia o valores */}
      <section className="history-section">
        <h2>Nuestra Historia</h2>
        <p className="history-text">
          Fundada en [año de fundación], [Nombre de la Empresa] comenzó como un proyecto de [breve historia o misión de la empresa]. Desde entonces, hemos crecido y evolucionado, pero siempre manteniendo nuestro compromiso con [valores clave, como "excelencia, innovación y compromiso con el estudiante"].
        </p>
      </section>

      {/* Sección con valores o pilares */}
      <section className="values-section">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Calidad</h3>
            <p>Nos esforzamos por ofrecer la mejor experiencia educativa a nuestros estudiantes.</p>
          </div>
          <div className="value-card">
            <h3>Innovación</h3>
            <p>Siempre estamos en busca de nuevas formas de mejorar y adaptarnos a las necesidades del futuro.</p>
          </div>
          <div className="value-card">
            <h3>Compromiso</h3>
            <p>Nuestro equipo se dedica a apoyar y guiar a cada estudiante en su desarrollo personal y profesional.</p>
          </div>
        </div>
      </section>

      {/* Sección de imagen o cita motivacional */}
      <section className="image-section">
        <img src="/path/to/your-image.jpg" alt="Equipo de trabajo" className="team-image" />
        <p className="quote">"La educación es el arma más poderosa que puedes usar para cambiar el mundo." – Nelson Mandela</p>
      </section>
    </div>
  );
};

export default QuienesSomos;
