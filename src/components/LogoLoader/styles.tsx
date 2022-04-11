import styled from 'styled-components';

const LogoLoaderContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default LogoLoaderContainer;
