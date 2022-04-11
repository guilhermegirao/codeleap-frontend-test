import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  height: 28px;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-top: 8px;
  padding: 0 10px;
  width: 100%;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export { StyledLabel };
export default StyledInput;
