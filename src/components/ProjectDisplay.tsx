import Link from 'next/link';
import React from 'react';
import SvgOutlineExternalLink from '../icons/externalLink';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

type ProjectImageProps = {
  _id: number;
  img: string;
};

type ProjectInfoProps = {
  _id: number;
  title: string;
  desc: React.ReactElement;
  stack: string[];
  link: string;
  ext?: string;
};

type Props = ProjectImageProps & ProjectInfoProps;

const ProjectImage: React.FC<ProjectImageProps> = ({ img, _id }) => {
  return (
    <div
      className={classNames(
        'row-span-full col-span-full md:col-span-6 self-center md:relative md:after:absolute md:after:inset-0 md:after:w-full md:after:h-full md:after:from-transparent md:after:to-primary-900',
        _id % 2
          ? 'md:col-start-1 md:after:bg-gradient-to-r'
          : 'md:col-end-11 md:after:bg-gradient-to-l'
      )}
    >
      <img src={img} className='' />
    </div>
  );
};

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  _id,
  title,
  desc,
  stack,
  link,
  ext,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-y-5 row-span-full from-transparent via-primary-900 to-primary-900 h-full col-span-full md:col-span-5 px-4 py-6 justify-center',
        _id % 2
          ? 'bg-gradient-to-r md:col-end-11 items-end'
          : 'bg-gradient-to-l md:col-start-1 items-start'
      )}
    >
      <div className='flex gap-x-5 font-bold text-2xl'>
        <Link href={link}>
          <a className='text-primary-100 hover:text-accent-800 transition-colors ease-in-out'>
            {title}
          </a>
        </Link>
        {ext && (
          <Link href={ext}>
            <a>
              <SvgOutlineExternalLink className='h-4 w-4 lg:h-6 lg:w-6 text-primary-300 hover:text-primary-200 transition-colors' />
            </a>
          </Link>
        )}
      </div>
      <div className='max-w-md sm:max-w-lg'>
        <div
          className={classNames(
            'text-primary-100',
            _id % 2 ? 'text-right' : 'text-left'
          )}
        >
          {desc}
        </div>
      </div>
      <div className='flex gap-x-2 font-mono text-xs text-accent-100'>
        {stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
};

const ProjectDisplay: React.FC<Props> = ({ img, ...props }) => {
  return props._id % 2 ? (
    <div className='grid grid-cols-10 shadow-2xl rounded-lg overflow-hidden'>
      <ProjectImage img={img} _id={props._id} />
      <ProjectInfo {...props} />
    </div>
  ) : (
    <div className='grid grid-cols-10 shadow-2xl rounded-lg overflow-hidden'>
      <ProjectImage img={img} _id={props._id} />
      <ProjectInfo {...props} />
    </div>
  );
};

export default ProjectDisplay;
