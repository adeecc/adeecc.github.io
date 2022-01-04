import React from 'react';

type ProjectDeets = {
  _id: number;
  title: string;
  desc: string;
  img: string;
  stack: string[];
  link: string;
  ext?: string;
};

const featuredProjects: Array<ProjectDeets> = [
  {
    _id: 1,
    title: 'B(CMS)',
    desc: 'A minimal replacement for University Moodle Application',
    img: '/images/bcms.png',
    stack: ['React', 'Express', 'Tailwind', 'TypeScript', 'Postgres'],
    link: 'https://github.com/adeecc/bcms-client',
    ext: 'https://bcms.netlify.app'
  },
  {
    _id: 2,
    title: 'Shiftr.io',
    desc: 'Track Schedule, Meets and Inventory!',
    img: '/images/shiftrio.png',
    stack: ['Django', 'Postgres', 'Redis', 'Azure Cloud', 'Heroku'],
    link: 'https://github.com/adeecc/shiftr_api'
  },
  {
    _id: 3,
    title: 'Meet Helper',
    desc: 'Manage University wide Google Meet Class Links',
    img: '/images/meethelp.png',
    stack: ['Express', 'MongoDB', 'React', 'Heroku'],
    link: 'https://github.com/adeecc/meet_helper'
  }
];

interface FeaturedProjectProps {
  projectDeets: ProjectDeets;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ projectDeets }) => {
  return (
    <div className='col-span-1'>
      <a
        href={projectDeets.link}
        className='flex flex-row-reverse md:flex-col gap-8 justify-between border-4 border-accent-800 rounded-lg p-4 h-full md:min-h-[14em] origin-center hover:scale-[1.05] transition-transform'
      >
        <div className='text-sm'>{projectDeets.desc}</div>
        <span className='md:text-2xl font-semibold'>{projectDeets.title}</span>
      </a>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch'>
        {featuredProjects.map((fp) => (
          <FeaturedProject key={fp._id} projectDeets={fp} />
        ))}
      </div>
      <a
        href='https://github.com/adeecc/'
        className='text-primary-200 hover:text-primary-100 transition-colors flex items-center gap-x-1'
      >
        View all Projects
        <span className=''>
          <RightArrow className='h-4 w-4' />
        </span>
      </a>
    </div>
  );
};

export default Projects;

function RightArrow(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-7 w-7'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M14 5l7 7m0 0l-7 7m7-7H3'
      />
    </svg>
  );
}
