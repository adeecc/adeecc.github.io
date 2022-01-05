import React from 'react';

interface Props {
  text: string;
}

export const TagBullet: React.FC<Props> = ({ text }) => {
  return (
    <div className='text-primary-200 text-xs font-semibold bg-primary-800 border-[1px] border-primary-300 px-2 py-0.5 rounded-xl'>
      {text}
    </div>
  );
};

const TagList: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className='flex gap-x-1 items-center flex-wrap'>
      {tags?.map((text) => (
        <TagBullet key={text} text={text} />
      ))}
    </div>
  );
};

export default TagList
