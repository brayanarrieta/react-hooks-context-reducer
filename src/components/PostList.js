import React, { useContext, useEffect, useRef } from 'react'
import { PostContext } from '../context/post';

const PostList = () => {
    const postContext = useContext(PostContext);
    const {
        getPosts,
        posts,
    } = postContext;

    const getPostsRef = useRef(getPosts);

    useEffect(() => {
        getPostsRef.current();
    },[]);


    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post, index)=> <li key={`post-${index}`}>{post.title}</li>)}

        </div>
    )
}

export default PostList;