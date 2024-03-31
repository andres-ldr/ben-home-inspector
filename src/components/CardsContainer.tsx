import React from 'react';
import Card from './Card';

interface CardsContainerProps {
  className?: string;
}
const CardsContainer = ({ className }: CardsContainerProps) => {
  return (
    <div className={className}>
      <Card
        title='Service 1'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae'
      />
      <Card
        title='Service 2'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae'
      />
      <Card
        title='Service 3'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae'
      />
    </div>
  );
};

export default CardsContainer;
