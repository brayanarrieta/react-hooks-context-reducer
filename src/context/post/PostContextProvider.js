import React, { useReducer } from 'react';

import postReducer from './postReducer';
import { GET_POSTS } from '../../constants';
import axiosInstance from '../../api/axios';
import { PostContext } from './PostContext';

export const PostContextProvider = (props) => {
    const initialState = {
        posts: [],
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(postReducer, initialState);

    const getPosts = async () => {
        try {
            const { data } = await axiosInstance.get('/posts');
            dispatch({
                type: GET_POSTS,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <PostContext.Provider
            value={{
                posts: state.posts,
                getPosts
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
};