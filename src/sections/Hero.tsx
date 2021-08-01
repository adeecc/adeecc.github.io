import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center'>
        <div className='flex flex-col gap-y-3'>
          <div className='Header'>
            {/* Header */}
            <div className='font-mono text-accent-900'>
              Hello there! My name is
            </div>
            <h1 className='text-primary-100'>Aditya Chopra.</h1>
            <h3 className='text-primary-300'>
              Just a guy trying to make some hot leaf juice!
            </h3>
          </div>

          {/* Intro */}
          <div className='mt-9'>
            <div className='text-primary-300 max-w-prose'>
              <p>
                I'm a Computer Science Undergrad from India in my 3rd year. I
                dabble mostly with{' '}
                <span className='text-primary-100'>Frontend Development</span>{' '}
                and <span className='text-primary-100'>Deep Learning</span>.
                Occasionally, you may find me working on REST Backends and
                Robotics.
              </p>
              <p>
                Currently looking for internships in the fields of Software
                Engineering and Data Science. If I happen to have started
                blogging, you can find it{' '}
                <Link href='#'>
                  <a className='text-accent-900 hover:text-accent-800'>here</a>
                </Link>
              </p>
            </div>
          </div>

          <div className='mt-9'>
            <Button href='https://github.com/adeecc'>Get in touch!</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
