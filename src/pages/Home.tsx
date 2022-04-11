import React from 'react';

import Container from '@/components/Container';
import Header from '@/components/Header';
import Content from '@/components/Content';

import PostsList from '@/components/PostsList';
import PostForm from '@/components/PostForm';

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <PostForm type="CREATE" />
        <PostsList />
      </Content>
    </Container>
  );
}

export default Home;
