import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 64px;
  text-align: center;
  width: 100%;

  button {
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    justify-content: center !important;
    padding: 0px !important;
  }
`;

export default StyledHeader;
