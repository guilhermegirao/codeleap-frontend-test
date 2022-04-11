import Post from '@/@types/Post';

export const FetchPosts = (posts: Post[]) => ({
  type: 'FETCH_POSTS',
  payload: { posts }
});

export const AddPost = (post: Post) => ({
  type: 'ADD_POST',
  payload: { post }
});

export const RemovePost = (postId: number) => ({
  type: 'REMOVE_POST',
  payload: { postId }
});

export const UpdatePost = (post: Post) => ({
  type: 'UPDATE_POST',
  payload: { post }
});
