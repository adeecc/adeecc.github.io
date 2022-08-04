import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='px-8 md:p-0 md:max-w-2xl mx-auto'>{children}</div>;
};

export default Container;
