import React, { useState, useEffect } from "react";
import { GetBlogs } from "../services/firebaseConfig"; // Ajusta la ruta según tu proyecto
import "/Users/josep/Web_Development/Patricia_Manfredi/style/Blog.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await GetBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Cargando blogs...</p>;
  }

  return (
    <div className="blog-container">
      <h1 className="blog-title">Nuestro Blog</h1>
      <p className="blog-description">
        Explora nuestras últimas publicaciones sobre temas interesantes.
      </p>
      <div className="articles-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="article-card">
            <div className="blog-image-container">
              <img
                src={blog.image}
                alt={blog.title}
                className="article-image"
              />
            </div>
            <div className="article-content">
              <h3 className="article-title">{blog.title}</h3>
              <p className="article-description">
              </p>
              <a
                href={`/blog/${blog.id}`}
                className="read-more-button"
              >
                Leer más
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
