// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        const token = localStorage.getItem('token');
        const response = await axios.get(`/api/posts?page=${page}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        setPosts(prevPosts => [...prevPosts, ...response.data]);
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, [page, fetchPosts]); // Add fetchPosts to the dependency array
    

    return (
        <div>
            {posts.map(post => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <small>{post.author.username}</small>
                </div>
            ))}
            {loading && <p>Loading...</p>}
            <button onClick={() => setPage(page + 1)}>Load more</button>
        </div>
    );
};

export default PostList;
