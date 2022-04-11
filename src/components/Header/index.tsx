import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserDeAuthAction } from '@/actions/UserActions';

import StyledHeader from './styles';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signout = () => {
    dispatch(UserDeAuthAction());
    navigate('/');
  };

  return (
    <StyledHeader>
      <h4>CodeLeap Network</h4>
      <button type="button" onClick={signout}>
        Signout
      </button>
    </StyledHeader>
  );
}

export default Header;
