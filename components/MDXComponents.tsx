import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a
          className='no-underline text-accent-800 hover:text-accent-900 transition-all'
          {...props}
        >
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      className='no-underline text-accent-800 hover:text-accent-900 transition-all'
      {...props}
    />
  );
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />;
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink
};

export default MDXComponents;
