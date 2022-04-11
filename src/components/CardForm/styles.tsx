import styled from 'styled-components';

const CardBodyContent = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  width: 100%;

  > form {
    display: flex;
    flex-direction: column;
    width: 100%;

    > input,
    textarea {
      margin-bottom: 16px;
    }
  }
`;

const CardBodyContentButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

export { CardBodyContent, CardBodyContentButtons };
