import React from 'react';

import SectionHeader from '../../components/SectionHeader';

interface Props {
  id: string;
}

const About: React.FC<Props> = ({ id }) => {
  return (
    <div id={id} className='min-h-screen flex items-center'>
      <div className='py-10 flex flex-col gap-y-10'>
        {/* Title */}
        <SectionHeader index={1} title='About Me' />
        <div className='grid grid-cols-1 md:grid-cols-5 md:gap-5'>
          {/* Text */}
          <div className='flex flex-col md:max-w-md gap-y-5 col-span-1 md:col-span-3'>
            <div className='text-primary-100'>
              Hello There! I am a Computer Science Engineering Student in my 3rd
              Year of Undegrad Education at BITS Pilani, Hyderabad Campus. What
              started as a hobbie in 2014, has grown into my choice of career
              and pashion for the years to come. I work with{' '}
              <span className='font-mono text-accent-100'>Frontend</span> and{' '}
              <span className='font-mono text-accent-100'>Backend</span> of web
              technologies, and am currently learning more about{' '}
              <span className='font-mono text-accent-100'>GraphQL</span> and{' '}
              <span className='font-mono text-accent-100'>
                Designing Scalable Systems
              </span>
              .
            </div>
            <div className='text-primary-100'>
              I am also keenly interested in the field of Deep Learning, all
              things about it from the Mathematical background to the
              Application pipelines. I have worked with Computer Vision and
              Language Models and currently exploring the rich field of Deep
              Reinforcement Learning.
            </div>

            <div className='text-primary-100'>
              Here are the technologies I have worked with recently:
            </div>

            <div className='font-mono text-sm text-accent-100'>
              <ul className='list-disc list-inside grid grid-cols-2 gap-x-5 gap-y-2'>
                <li>ReactJS | NextJS </li>
                <li>Express | Django</li>
                <li>REST | GraphQL</li>
                <li>PyTorch | Keras</li>
                <li>Stable Baselines</li>
              </ul>
            </div>
          </div>
          {/* Picture */}
          <div className='hidden md:block relative my-auto md:col-span-2 overflow-hidden'>
            <div className='bg-accent-900 overflow-hidden rounded-lg'>
              <img
                src='/profile.jpg'
                alt='me'
                className='relative w-full h-auto transition-opacity duration-200 ease-in-out opacity-50 hover:opacity-100'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
