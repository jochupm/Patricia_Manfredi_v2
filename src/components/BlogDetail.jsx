import React, { useContext, useState } from "react";
import "/Users/josep/Web_Development/Patricia_Manfredi/style/BlogDetail.css"

const BlogDetail = ({ id, image, title, description, content }) => {
    return (
      <div className="blog-detail-container">
        <div className="blog-detail-row">
          {/* Imagen del blog */}
          <div className="col-md-6">
            <img src={image} alt={"title"} className="blog-detail-image" />
          </div>
  
          {/* Detalles del blog */}
          <div className="blog-detail-details">
          <h2 className="blog-detail-title">{title}</h2>
          <p className="blog-detail-description">{content}</p>
          </div>
        </div>
      </div>
    );
  };

export default BlogDetail;
