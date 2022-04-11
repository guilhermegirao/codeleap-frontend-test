import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import CardForm from '@/components/CardForm';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import { CardBodyContentButtons } from '@/components/CardForm/styles';
import PostService from '@/actions/services/PostService';
import Alert from '@/components/Alert';

import { RootState } from '@/redux/rootReducer';
import { AddPost, UpdatePost } from '@/actions/PostActions';
import Post from '@/@types/Post';
import { EditModalClose } from '@/actions/EditModalActions';

type FormData = {
  title: string;
  content: string;
};

type PostFormProps = {
  type: 'CREATE' | 'UPDATE';
  post?: Post;
};

function PostForm({ type, post }: PostFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [handleTitle, setHandleTitle] = useState(post?.title || '');
  const [handleContent, setHandleContent] = useState(post?.content || '');
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      title: post?.title,
      content: post?.content
    }
  });

  const onSubmit = async (data: FormData) => {
    const { title, content } = data;
    const { username } = user;

    try {
      const postData = {
        title,
        content,
        username
      };

      setIsLoading(true);

      if (type === 'CREATE') {
        const createdPost = await PostService.createPost(postData);
        dispatch(AddPost(createdPost));
      }

      if (type === 'UPDATE' && post?.id) {
        const updatedPost = await PostService.updatePost(post?.id, postData);
        dispatch(UpdatePost(updatedPost));
      }

      dispatch(EditModalClose());

      setHandleTitle('');
      setHandleContent('');
      reset();

      setHasError(false);
    } catch (error: any) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CardForm
      method="POST"
      title={type === 'CREATE' ? "What's on your mind?" : 'Edit Item'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <>
        {hasError && (
          <Alert>
            An error has occurred while sending your post. Try again later.
          </Alert>
        )}
        <Input
          type="text"
          label="Title"
          name="title"
          placeholder="Hello World"
          register={register}
          onChange={e => setHandleTitle(e.target.value)}
          defaultValue={post?.title}
          required
        />
        <TextArea
          label="Content"
          name="content"
          register={register}
          placeholder="Content here"
          onChange={e => setHandleContent(e.target.value)}
          defaultValue={post?.content}
          required
        />

        <CardBodyContentButtons>
          <Button
            type="submit"
            disabled={!(handleTitle && handleContent) || isLoading}
          >
            {!isLoading
              ? type === 'CREATE'
                ? 'CREATE'
                : 'SAVE'
              : 'Sending...'}
          </Button>
        </CardBodyContentButtons>
      </>
    </CardForm>
  );
}

export default PostForm;
