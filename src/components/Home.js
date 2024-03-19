// import React, { useEffect, useState } from 'react';
// import axios from "axios";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogList from './Bloglist';

const Blog = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:4000/blogs")
            .then(res => {
                setBlogs(res.data);
            })
            .catch(err => {
                console.error("Error fetching blogs", err);
            });
    }, []);

    return (
        <div>
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
    );
}

export default Blog;
