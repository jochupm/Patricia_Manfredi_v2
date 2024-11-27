import React from 'react';
import '/Users/josep/Web_Development/Patricia_Manfredi/style/Blog.css';
import '/Users/josep/Web_Development/Patricia_Manfredi/img/Blog/molderia-inicial.png';



// const Blog = () => {
//   // Ejemplo de datos de artículos de blog
//   const articles = [
//     {
//       id: 1,
//       title: 'El arte de la moldería: Crea tus propias prendas desde cero',
//       description: 'Descubre los fundamentos de la moldería y cómo transformar ideas en patrones precisos para confeccionar prendas únicas. Este blog te guiará paso a paso, desde la toma de medidas hasta los acabados finales',
//       image: '/img/Blog/molderia-inicial.png',
//       link: '/blog/molderia-inicial'
//     },
//     {
//       id: 2,
//       title: 'Secretos de la lencería: Diseños elegantes y personalizados',
//       description: 'Aprende las técnicas esenciales para crear lencería delicada y a medida. Exploraremos cómo trabajar con telas especiales, acabados profesionales y consejos para un diseño cómodo y sofisticado.',
//       image: '/img/Blog/diseno-lenceria.png',
//       link: '/blog/diseno-lenceria'
//     },
//     {
//       id: 3,
//       title: 'Danza clásica y confección: Vestuarios que inspiran movimiento',
//       description: 'Sumérgete en el fascinante mundo de los vestuarios para danza clásica. Conoce cómo crear piezas que combinan estética y funcionalidad, desde tutús clásicos hasta trajes modernos para el escenario.',
//       image: '/img/Blog/danza-clasica.png',
//       link: '/blog/danza-clasica'
//     },
//   ];

//   return (
//     <div className="blog-container">
//       <h1 className="blog-title">Nuestro Blog</h1>
//       <p className="blog-description">
//         Explora nuestros artículos sobre danza, técnica y desarrollo personal en el mundo de la danza.
//       </p>
      

//     </div>
//   );
// };

const Blogs = ({ title, description, image }) => {
  return (
    // <div className="blog-card">
    //   <div className="blog-image-container">
    //     <img src={image} alt={title} className="blog-image" />
    //   </div>
    //   <h3>{title}</h3>
    //   <p>{description}</p>
    // </div>
 
    <div className="articles-grid">
    {Blog.map(Blog => (
      <div key={Blog.id} className="article-card">
        <img src={Blog.image} alt={Blog.title} className="article-image" />
        <div className="article-content">
          <h2 className="article-title">{Blog.title}</h2>
          <p className="article-description">{Blog.description}</p>
          <a href={Blog.link} className="read-more-button">Leer más</a>
        </div>
      </div>      
    
    ))}
</div> )}

export default Blogs;