import styled, { css } from 'styled-components';

export type AlertProps = {
  readonly type?: 'error' | 'info';
};

const Alert = styled.div<AlertProps>`
  align-items: center;

  ${props =>
    (!props?.type || props?.type === 'error') &&
    css`
      background: ${props.theme.colors.red};
    `};

  ${props =>
    props?.type === 'info' &&
    css`
      background: ${props.theme.colors.primary};
    `};

  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  font-weight: 700;
  height: 56px;
  margin-bottom: 32px;
  overflow: hidden;
  padding: 0 28px;
  width: 100%;
`;

export default Alert;
