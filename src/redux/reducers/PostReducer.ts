import Post from '@/@types/Post';

interface Action {
  type: 'FETCH_POSTS' | 'ADD_POST' | 'REMOVE_POST' | 'UPDATE_POST';
  payload: {
    post?: Post;
    posts?: Post[];
    postId?: number;
  };
}

const INITIAL_STATE: Post[] = [];

// eslint-disable-next-line default-param-last
const PostReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'FETCH_POSTS': {
      const { posts } = action.payload;

      if (!posts) return state;

      return [...state, ...posts];
    }

    case 'ADD_POST': {
      const { post } = action.payload;

      return [post, ...state];
    }

    case 'UPDATE_POST': {
      const { post } = action.payload;

      let updatePost = state.find(p => p.id === post?.id);

      if (!updatePost) return state;

      updatePost = {
        ...updatePost,
        ...post
      };

      const posts = state.map(p => (p.id === updatePost?.id ? updatePost : p));

      return posts;
    }

    case 'REMOVE_POST': {
      const { postId } = action.payload;

      const posts = state.filter(p => p.id !== postId);

      return posts;
    }

    default:
      return state;
  }
};

export default PostReducer;
