import { formatDistanceToNow, parseISO } from 'date-fns';
import React, { useMemo } from 'react';
import Card from '../Card';
import { CardBodyContent, CardBodyContentInfos } from './styles';

type CardProps = {
  title: string;
  text: string;
  author: string;
  date: string;
  cardIcons: {
    active: boolean;
  };
  onDeleteClick?: React.MouseEventHandler<HTMLButtonElement>;
  onEditClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function CardPost({
  title,
  author,
  date,
  text,
  cardIcons,
  onDeleteClick,
  onEditClick
}: CardProps) {
  const distance = useMemo(
    () =>
      formatDistanceToNow(parseISO(date), {
        addSuffix: true,
        includeSeconds: true
      }),
    [date]
  );

  return (
    <Card
      cardColor="black"
      {...{ title, cardIcons, onDeleteClick, onEditClick }}
    >
      <CardBodyContent>
        <CardBodyContentInfos>
          <b>@{author}</b>
          <p title={date}>{distance}</p>
        </CardBodyContentInfos>
        <p>{text}</p>
      </CardBodyContent>
    </Card>
  );
}

export default CardPost;
