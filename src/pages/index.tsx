import React from 'react';
import Head from 'next/head';

import Container from '../components/Container';
import About from './sections/About';
import Hero from './sections/Hero';

import SvgOutlineGithub from '../icons/github';
import SvgOutlineLinkedin from '../icons/linkedin';
import SvgOutlineInstagram from '../icons/instagram';
import SvgOutlineTwitter from '../icons/twitter';
import WithID from '../utils/WithID';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

interface SocialLink {
  logo: JSX.Element;
  href: string;
}

const SocialLinks: SocialLink[] = [
  {
    logo: (
      <SvgOutlineGithub className='h-6 w-6 lg:h-8 lg:w-8 text-primary-300 hover:text-primary-200 transition-colors' />
    ),
    href: 'https://github.com/adeecc',
  },
  {
    logo: (
      <SvgOutlineLinkedin className='h-6 w-6 lg:h-8 lg:w-8 text-primary-300 hover:text-primary-200 transition-colors' />
    ),
    href: 'https://www.linkedin.com/in/aditya-chopra11/',
  },
  {
    logo: (
      <SvgOutlineTwitter className='h-6 w-6 lg:h-8 lg:w-8 text-primary-300 hover:text-primary-200 transition-colors' />
    ),
    href: 'https://twitter.com/adeeco11',
  },
  {
    logo: (
      <SvgOutlineInstagram className='h-6 w-6 lg:h-8 lg:w-8 text-primary-300 hover:text-primary-200 transition-colors' />
    ),
    href: 'https://www.instagram.com/adeecc11/',
  },
];

const SideBar: React.FC = ({ children }) => {
  return (
    <div className='fixed bottom-0'>
      <div className='flex flex-col items-center gap-y-10'>
        {children}
        <span className='h-36 border-r-2 sm:border-primary-300'></span>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>adeecc || Aditya Chopra</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <div className='grid grid-cols-1 sm:grid-cols-12 gap-x-2'>
        <div className='hidden col-span-1 sm:flex'></div>
        <div className='col-span-10'>
          <Container>
            <Hero />
            <WithID id='about'>
              <About />
            </WithID>
            <WithID id='experience'>
              <Experience />
            </WithID>
            <WithID id='projects'>
              <Projects />
            </WithID>
          </Container>
        </div>
        <div className='hidden col-span-1 sm:flex'>
          <SideBar>
            <ul className='grid grid-cols-1 gap-y-5'>
              {SocialLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.logo}</a>
                </li>
              ))}
            </ul>
          </SideBar>
        </div>
      </div>
    </>
  );
};

export default Home;
