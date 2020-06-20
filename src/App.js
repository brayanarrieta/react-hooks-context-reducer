import React from 'react';
import PostList from './components/PostList';
import { PostContextProvider } from './context/post';

function App() {
  return (
    <PostContextProvider>
      <PostList></PostList>
    </PostContextProvider>
  );
}

export default App;
