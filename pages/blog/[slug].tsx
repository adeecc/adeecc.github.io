import React from 'react';
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

type Post = {
  title: string;
  date: string;
  tags: string[];
  draft: boolean;
  summary: string;
  slug: string;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  };
};

const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  return <div></div>;
};

export default Blog;
