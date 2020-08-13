import React from 'react';

const now = new Date();

const PastOrFuture1: React.FC<{ date: Date }> = ({ date }) => {
  const text = date < now ? 'Past' : 'Future';

  return <p>{text}</p>;
};

export default PastOrFuture1;
