// BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="blog-card">
      <div className="card-container">
        <img
          src={blog.image}
          alt={blog.title}
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">{blog.title}</h2>
          <p className="card-date">{blog.date}</p>
          <p className="card-excerpt">{blog.content.slice(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
