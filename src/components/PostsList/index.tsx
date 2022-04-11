/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostService from '@/actions/services/PostService';
import { RootState } from '@/redux/rootReducer';
import { FetchPosts, RemovePost } from '@/actions/PostActions';
import Post from '@/@types/Post';
import User from '@/@types/User';
import { EditModalOpen } from '@/actions/EditModalActions';
import Loader from '../Loader';
import Alert from '../Alert';
import CardPost from '../CardPost';
import PostModal from '../PostModal';

function PostsList() {
  const nextPosts = useRef('');
  const loader = useRef(null);
  const dispatch = useDispatch();

  const [urlPath, setUrlPath] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDeletePost, setIsLoadingDeletePost] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [modalSelectedPost, setModalSelectedPost] = useState<
    Post | undefined
  >();

  const posts = useSelector((state: RootState) => state.post) as Post[];
  const user = useSelector((state: RootState) => state.user) as User;
  const editModalStatus = useSelector(
    (state: RootState) => state.editModal
  ) as boolean;

  const handleObserver = useCallback(entries => {
    const target = entries[0];

    if (target.isIntersecting && nextPosts.current) {
      setUrlPath(nextPosts.current);
    }
  }, []);

  const handleDeleteClick = useCallback(
    async postId => {
      try {
        const isDelete = confirm('Are you sure you want to delete this item?');

        if (isDelete) {
          setIsLoadingDeletePost(true);
          await PostService.removePost(postId);

          dispatch(RemovePost(postId));
        }
      } catch {
        alert(
          'An error has occurred while deleting your post. Try again later.'
        );
      } finally {
        setIsLoadingDeletePost(false);
      }
    },
    [posts]
  );

  const handleEditClick = useCallback(
    async post => {
      setModalSelectedPost(post);
      dispatch(EditModalOpen());
    },
    [posts]
  );

  const loadPosts = useCallback(async () => {
    try {
      setIsLoading(true);

      const postsList = await PostService.listPosts(urlPath);

      setHasError(false);

      dispatch(FetchPosts(postsList.results));

      nextPosts.current = postsList.next || '';
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [urlPath]);

  useEffect(() => {
    loadPosts();
  }, [urlPath]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  if (hasError) return <Alert>Sorry. Something went wrong.</Alert>;

  return (
    <>
      {editModalStatus && <PostModal post={modalSelectedPost} />}
      {isLoadingDeletePost && (
        <Alert type="info">Wait... Your post is being deleted.</Alert>
      )}
      {posts.map(post => (
        <CardPost
          key={post.id}
          author={post.username}
          date={post?.created_datetime || ''}
          text={post.content}
          title={post.title}
          cardIcons={{
            active: user.username === post.username
          }}
          onDeleteClick={() => handleDeleteClick(post.id)}
          onEditClick={() => handleEditClick(post)}
        />
      ))}
      {isLoading && <Loader />}
      <div ref={loader} />
    </>
  );
}

export default PostsList;
