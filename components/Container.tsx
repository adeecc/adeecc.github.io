import React from 'react';

const Container: React.FC = ({ children }) => {
  return <div className='px-8 md:p-0 md:max-w-2xl mx-auto'>{children}</div>;
};

export default Container;
