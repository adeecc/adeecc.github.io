import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

import Container from '../../components/Container';
import components from '../../components/MDXComponents';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params?.slug);
  return {
    props: { post }
  };
};

const BlogPost: NextPage<{ post: Blog }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css'
          integrity='sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn'
        ></link>
      </Head>

      <Container>
        <div className='flex flex-col'>
          <h1 className='text-5xl font-semibold'>{post.title}</h1>
          <div className='flex justify-between'>
            <span className='text-sm text-primary-300'>
              Aditya Chopra // {post.publishedAt}
            </span>
            <div className='text-sm text-primary-300'>
              {post.readingTime.text}
            </div>
          </div>

          {/* Add a contents page */}
        </div>

        <div className='prose prose-invert'>
          <Component components={{ ...components } as any} />
        </div>
      </Container>
    </>
  );
};

export default BlogPost;
