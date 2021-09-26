import React, { useMemo } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';

import fs from 'fs';
import path from 'path';

import { bundleMDX } from 'mdx-bundler';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

type Post = {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs.readdirSync(path.join(process.cwd(), 'data', 'blog'));
  // console.log(posts);

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace('.md', '')
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug;
  const source = fs.readFileSync(
    path.join(process.cwd(), 'data', 'blog', `${slug}.md`),
    'utf8'
  );

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        remarkGfm,
        remarkMath
      ];

      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        [rehypeAutolinkHeadings, { properties: { classname: ['anchor'] } }],
        rehypeKatex,
        [rehypePrismPlus, { ignoreMissing: true }]
      ];

      return options;
    }
  });

  const post: Post = {
    code,
    frontmatter: {
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      slug: slug || null
    }
  };

  // console.log(post);

  return {
    props: post
  };
};

const Blog: React.FC<Post> = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="mt-48 text-primary-100">
      <pre>{JSON.stringify(frontmatter, null, '\t')}</pre>
      <Component />
    </div>
  );
};

export default Blog;
