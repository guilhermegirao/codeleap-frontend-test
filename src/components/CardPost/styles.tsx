import styled from 'styled-components';

const CardBodyContent = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  width: 100%;
`;

const CardBodyContentInfos = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    justify-content: start !important;
    flex-direction: column;
  }
`;

export { CardBodyContent, CardBodyContentInfos };
