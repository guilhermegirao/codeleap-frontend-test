/* eslint-disable default-param-last */
import User from '@/@types/User';

interface Action {
  type: 'AUTHENTICATE' | 'DEAUTHENTICATE';
  payload: User;
}

let INITIAL_STATE = {
  username: ''
};

if (typeof localStorage !== 'undefined') {
  const data = localStorage.getItem('codeleap/user');

  if (data) {
    INITIAL_STATE = {
      username: data
    };
  }
}

const UserReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATE': {
      const authObject = { ...action.payload };

      localStorage.setItem('codeleap/user', action.payload.username);

      return authObject;
    }

    case 'DEAUTHENTICATE': {
      localStorage.removeItem('codeleap/user');

      return {
        username: ''
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
