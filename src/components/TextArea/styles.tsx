import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  height: 74px;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-top: 8px;
  padding: 0 10px;
  resize: none;
  width: 100%;
`;

export default StyledTextArea;
