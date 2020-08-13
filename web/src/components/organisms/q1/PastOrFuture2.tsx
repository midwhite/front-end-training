import React from 'react';

const PastOrFuture2: React.FC<{ date: Date }> = ({ date }) => {
  const text = date < new Date() ? 'Past' : 'Future';

  return <p>{text}</p>;
};

export default PastOrFuture2;
