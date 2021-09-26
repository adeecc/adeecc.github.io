import React from 'react';

interface Props {
  src: string;
}

const TintImg: React.FC<Props> = ({ src }) => {
  return (
    <div>
      <div className='bg-accent-900 overflow-hidden rounded-lg'>
        <img
          src={src}
          alt='me'
          className='w-full h-auto transition-opacity duration-200 ease-in-out opacity-50 hover:opacity-100'
        />
      </div>
    </div>
  );
};

export default TintImg;
