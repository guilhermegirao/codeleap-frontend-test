import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ disabled, theme }) =>
    !disabled ? theme.colors.primary : theme.colors.gray};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'default')};
  font-size: 16px;
  height: 35px;
  text-transform: uppercase;
  width: 110px;
`;

export default Button;
