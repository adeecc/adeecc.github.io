import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from 'components/Container';
import Projects from 'components/Projects';
import Timeline from 'components/Timeline';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aditya Chopra || adeecc</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Container>
        <div className='flex flex-col-reverse sm:flex-row gap-5 mt-16 sm:items-center justify-between'>
          <div className='col-span-1 sm:col-span-4 rows-span-1 col-start-1 max-w-md'>
            <h1 className='text-5xl font-semibold'>Aditya Chopra</h1>
            <h4 className='text-lg text-primary-200'>
              Undergraduate Computer Science Student at BITS Hyd.
            </h4>

            <div className='text-primary-300 mt-8'>
              Working with Natural Langage Processing, Reinforcement Learning
              and dabbling with Web Development on occasion
            </div>
          </div>
          <div className='block relative col-span-1 row-span-1 sm:col-end-4'>
            <Image
              alt='profile picture'
              src='https://avatars.githubusercontent.com/u/28647816'
              width={100}
              height={100}
              layout='intrinsic'
              className='rounded-full'
            />
          </div>
        </div>

        {/* Featured Blog Posts go Here! */}

        {/* Timeline */}
        <div className='mt-24'>
          <h3 className='text-3xl font-semibold'>
            Where did I come from, where did I go?
          </h3>
          <Timeline />
        </div>

        {/* Featured Projects */}
        <div className='mt-24'>
          <h3 className='text-3xl font-semibold'>Featured Projects</h3>
          <Projects />
        </div>
      </Container>
    </>
  );
};

export default Home;
