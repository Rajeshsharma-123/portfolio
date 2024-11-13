// Blogs.jsx
import React from 'react';
import BlogCard from '../../component/BlogCard';
import { blogs } from '../../data';
import './blogs.css'; // Import the CSS file for styling

const Blogs = () => {
  return (
    <div className="blogs-container container grid">
      <h1 className="section__title">Latest <span>Blogs</span> </h1>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
