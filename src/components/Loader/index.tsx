import styled from 'styled-components';

const Loader = styled.div`
  animation: spin 1s linear infinite;
  border: 6px solid ${props => props.theme.colors.background};
  border-left-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  height: 40px;
  margin: 20px auto;
  width: 40px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
