import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

export function getFiles(type: string) {
  return fs.readdirSync(path.join(process.cwd(), 'data', type));
}

export async function getFileBySlug(type: string, slug: string) {
  const source = slug
    ? fs.readFileSync(
        path.join(process.cwd(), 'data', type, `${slug}.md`),
        'utf8'
      )
    : fs.readFileSync(path.join(process.cwd(), 'data', `${type}.md`), 'utf8');

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

  const res = {
    code,
    frontmatter: {
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      slug: slug || null
    }
  };

  console.log(res);

  return res;
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(process.cwd(), 'data', type));

  const allFrontMatter = files.reduce((allPosts, postSlug) => {
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

  const posts = allFrontMatter.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });

  return posts;
}
