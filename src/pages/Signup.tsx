import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@/components/Container';
import { ContentCenter } from '@/components/Content';
import LogoLoader from '@/components/LogoLoader';
import CardForm from '@/components/CardForm';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { CardBodyContentButtons } from '@/components/CardForm/styles';

import { RootState } from '@/redux/rootReducer';
import { UserAuthAction } from '@/actions/UserActions';

type FormData = {
  username: string;
};

function Signup() {
  const [isLoading, setIsLoading] = useState(true);
  const [handleUsername, setHandleUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      username: ''
    }
  });

  const onSubmit = (data: FormData) => {
    if (data.username) {
      dispatch(UserAuthAction({ username: data.username }));
      navigate('/');
    }
  };

  useEffect(() => {
    if (user.username) {
      navigate('/');
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Container>
      <ContentCenter>
        {isLoading ? (
          <LogoLoader />
        ) : (
          <CardForm
            title="Welcome to CodeLeap network!"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <>
              <Input
                name="username"
                label="Please enter your username"
                type="text"
                required
                placeholder="John doe"
                register={register}
                onChange={e => setHandleUsername(e.target.value)}
              />
              <CardBodyContentButtons>
                <Button type="submit" disabled={!handleUsername}>
                  Enter
                </Button>
              </CardBodyContentButtons>
            </>
          </CardForm>
        )}
      </ContentCenter>
    </Container>
  );
}

export default Signup;
