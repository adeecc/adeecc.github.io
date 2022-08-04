import type { NextPage } from 'next';
import Head from 'next/head';

import Container from 'components/Container';
import Projects from 'components/Projects';
import Timeline from 'components/Timeline';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact || adeecc</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Container>
        <div className='flex flex-col gap-y-5'>
          <h1 className='text-5xl font-semibold'>Contact Me!</h1>
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
