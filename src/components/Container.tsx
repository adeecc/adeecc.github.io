import React from 'react';

interface Props {}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className='relative px-9 mx-auto md:max-w-5xl '>{children}</div>
    </>
  );
};

export default Container;
