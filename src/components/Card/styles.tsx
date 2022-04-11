import { CardHeaderProps } from '@/@types/CardHeaderProps';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: 1px solid ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin: 20px 0;
  width: 100%;
`;

const CardHeader = styled.div<CardHeaderProps>`
  align-items: center;
  background-color: ${props =>
    props.cardColor === 'black'
      ? props.theme.colors.primary
      : props.theme.colors.white};
  color: ${props =>
    props.cardColor === 'black'
      ? props.theme.colors.white
      : props.theme.colors.primary};
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 32px;
  width: 100%;
`;

const CardHeaderIcons = styled.div`
  display: flex;
  justify-content: inherit;
  width: 60px;

  & > button {
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    height: 40px;
    padding: 0;
    width: 30px;

    > img {
      user-drag: none;
    }
  }
`;

const CardBody = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 24px 32px;
`;

export { CardContainer, CardHeader, CardHeaderIcons, CardBody };
