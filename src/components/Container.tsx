import React from 'react';

interface Props {}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className='px-9 sm:px-0 mx-auto md:max-w-5xl pt-24 sm:pt-0'>{children}</div>
    </>
  );
};

export default Container;
