import { useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';

import { allBlogs } from '.contentlayer/data';

import { pick } from '../lib/utils';
import Container from '../components/Container';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
  const [searchString, setSearchString] = useState('');
  const filteredBlogPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Blog || adeecc</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Container>
        <div className='flex flex-col gap-y-5'>
          <h1 className='text-5xl font-semibold'>Blog</h1>
          <div className='relative w-full'>
            <input
              aria-label='search blogposts'
              type='text'
              placeholder='Search'
              onChange={(e) => setSearchString(e.target.value)}
              className='block w-full px-4 py-2 text-primary-100 bg-primary-800 rounded-md focus:ring-primary-300 focus:border-primary-300'
            />
            <svg
              className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>

          {!filteredBlogPosts.length && (
            <span className='text-primary-300'>No posts found :(</span>
          )}

          {filteredBlogPosts.map((post: any) => (
            <NextLink key={post.slug} href={`/blog/${post.slug}`}>
              <a className='flex flex-col gap-y-3'>
                <h3 className='text-xl font-semibold'>{post.title}</h3>
                <div className='text-primary-300 text-xs'>
                  <span>{post.publishedAt}</span>
                </div>
                <div className='border-l-4 border-accent-800 pl-4 text-primary-200'>
                  {post.summary}
                </div>
              </a>
            </NextLink>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Blog;
