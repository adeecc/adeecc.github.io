import React from 'react';

interface Props {
  index: number;
}

const SectionHeader: React.FC<Props> = ({ index, children }) => {
  return (
    <div className='flex items-center'>
      <span className='font-mono text-3xl text-accent-900'>
        {String(index).padStart(2, '0') + '. '}
      </span>
      <div className='text-3xl ml-10 text-primary-100'>{children}</div>
      <div className='border-b-2 border-primary-600 sm:ml-10 sm:w-64'></div>
    </div>
  );
};

export default SectionHeader;
