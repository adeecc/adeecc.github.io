import React from 'react';
import { InferGetStaticPropsType, GetStaticProps } from 'next';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
  title: string;
  date: string;
  tags: string[];
  draft: boolean;
  summary: string;
  slug: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'data', 'blog'));

  const posts: Post[] = files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'data', 'blog', postSlug),
      'utf8'
    );

    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.md', ''),
        date: data.date ? new Date(data.date).toISOString() : null
      },
      ...allPosts
    ];
  }, []);

  return {
    props: {
      posts: posts.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      })
    }
  };
};

const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts
}) => {
//   console.log(posts);
  return (
    <pre className='text-primary-100 my-64'>
      {JSON.stringify(posts, null, '\t')}
    </pre>
  );
};

export default Blog;
