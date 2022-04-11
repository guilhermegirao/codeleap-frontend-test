import React from 'react';
import { Portal } from 'react-portal';
import Post from '@/@types/Post';
import StyledModalOverlay from './styles';

import PostForm from '../PostForm';

type PostModalProps = {
  post?: Post;
};

function PostModal({ post }: PostModalProps) {
  return (
    <Portal>
      <StyledModalOverlay>
        <PostForm type="UPDATE" {...{ post }} />
      </StyledModalOverlay>
    </Portal>
  );
}

export default PostModal;
