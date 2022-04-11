import React from 'react';
import Card from '../Card';
import { CardBodyContent } from './styles';

type CardProps = {
  title: string;
  method: 'GET' | 'POST' | 'REQUEST';
  children: JSX.Element;
  onSubmit: any;
};

function CardForm({ title, children, method, onSubmit }: CardProps) {
  return (
    <Card cardIcons={{ active: false }} cardColor="white" {...{ title }}>
      <CardBodyContent>
        <form {...{ method, onSubmit }}>{children}</form>
      </CardBodyContent>
    </Card>
  );
}

export default CardForm;
