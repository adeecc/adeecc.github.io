import React from 'react';
import ProjectDisplay from '../../components/ProjectDisplay';
import SectionHeader from '../../components/SectionHeader';

type project = {
  _id: number;
  title: string;
  desc: React.ReactElement;
  img: string;
  stack: string[];
  link: string;
  ext?: string;
};

const featuredProjects: Array<project> = [
  {
    _id: 1,
    title: 'B(CMS)',
    desc: (
      <p>
        B(CMS), or the Better CMS was created as a minimal replacement for the Moodle Application used by our university.
      </p>
    ),
    img: '/images/bcms.png',
    stack: ['React', 'Express', 'Tailwind', 'TypeScript', 'Postgres'],
    link: 'https://github.com/adeecc/bcms-client',
    ext: 'https://bcms.netlify.app',
  },
  {
    _id: 2,
    title: 'Shiftr.io',
    desc: (
      <p>
        REST API for a Mobile App. for tracking todo lists, schedules and inventory of the user. 
      </p>
    ),
    img: '/images/shiftrio.png',
    stack: ['Django', 'Postgres', 'Redis', 'Azure Cloud', 'Heroku'],
    link: 'https://github.com/adeecc/shiftr_api',
  },
  {
    _id: 3,
    title: 'Meet Helper',
    desc: (
      <p>
        Web Application to track and manage Google-Meet Links for courses conducted during online semesters.
      </p>
    ),
    img: '/images/meethelp.png',
    stack: ['Express', 'MongoDB', 'React', 'Heroku'],
    link: 'https://github.com/adeecc/meet_helper',
  },
];

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <div className='min-h-screen flex items-center'>
      <div className='my-10 flex flex-col gap-y-20'>
        <SectionHeader index={3}>Projects</SectionHeader>
        <div className='flex flex-col gap-y-36'>
          {featuredProjects.map((item) => (
            <ProjectDisplay key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
