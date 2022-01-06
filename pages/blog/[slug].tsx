import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

import Container from 'components/Container';
import components from 'components/MDXComponents';
import TagList from 'components/Tags';
import { useEffect, useMemo } from 'react';
import { NumViewsDao } from 'lib/dbConnect';

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
  const publishedDate = useMemo(
    () =>
      new Date(post.published).toLocaleDateString('en-US', {
        day: 'numeric',
        year: 'numeric',
        month: 'short'
      }),
    [post.published]
  );

  // const { data } = useSWR(`/api/views/${post.slug}`, fetcher);
  // const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${post.slug}`, {
        method: 'POST'
      });

    registerView();
  }, [post.slug]);
  return (
    <>
      <Head>
        <title>{post.title}</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css'
          integrity='sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs'
          crossOrigin='anonymous'
        />
      </Head>

      <Container>
        <div className='flex flex-col gap-y-3'>
          <h1 className='text-5xl font-semibold'>{post.title}</h1>
          <div className='flex justify-between items-center'>
            <div className='flex gap-x-3 items-center'>
              <span className='text-sm text-primary-300'>
                Aditya Chopra // {publishedDate}
              </span>
              <TagList tags={post.tags} />
            </div>
            <div className='text-sm text-primary-300'>
              {post.readingTime.text}
            </div>
          </div>

          <div className='border-l-4 border-accent-800 bg-primary-800 px-4 py-5 text-primary-200'>
            {post.summary}
          </div>
        </div>

        <div className='prose prose-invert'>
          <Component components={{ ...components } as any} />
        </div>
      </Container>
    </>
  );
};

export default BlogPost;
