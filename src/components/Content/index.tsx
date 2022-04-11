import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex: 0;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 32px;
  max-width: ${({ theme }) => theme.screens.xl};
  padding: 0 64px;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.screens.sm}) {
    margin-top: 16px !important;
    padding: 16px !important;
  }
`;

const ContentCenter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;

  & > div {
    max-width: ${({ theme }) => theme.screens.md};
  }
`;

export { ContentCenter };
export default Content;
