import React from 'react';

import { CardBody, CardContainer, CardHeader, CardHeaderIcons } from './styles';

type CardProps = {
  cardColor: 'black' | 'white';
  cardIcons: {
    active: boolean;
  };
  title: string;
  children: JSX.Element;
  onDeleteClick?: React.MouseEventHandler<HTMLButtonElement>;
  onEditClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Card({
  title,
  cardIcons,
  cardColor,
  children,
  onDeleteClick,
  onEditClick
}: CardProps) {
  return (
    <CardContainer>
      <CardHeader {...{ cardColor }}>
        <h4 className="truncate">{title}</h4>
        {cardIcons.active && (
          <CardHeaderIcons>
            <button type="button" onClick={onDeleteClick}>
              <img src="/icons/delete.svg" alt="Delete" />
            </button>

            <button type="button" onClick={onEditClick}>
              <img src="/icons/edit.svg" alt="Edit" />
            </button>
          </CardHeaderIcons>
        )}
      </CardHeader>
      <CardBody>{children}</CardBody>
    </CardContainer>
  );
}

export default Card;
