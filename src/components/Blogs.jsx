import React from 'react';
import '/Users/josep/Web_Development/Patricia_Manfredi/style/Blog.css';
import '/Users/josep/Web_Development/Patricia_Manfredi/img/Blog/molderia-inicial.png';


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