import User from '@/@types/User';

export const UserAuthAction = (user: User) => ({
  type: 'AUTHENTICATE',
  payload: user
});

export const UserDeAuthAction = () => ({
  type: 'DEAUTHENTICATE'
});
