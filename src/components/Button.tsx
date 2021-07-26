import React from 'react';
import Link from 'next/link';

interface Props {
  href: string | '';
}

const Button: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className='block flex-grow-0 py-2 px-6 border rounded-sm border-accent-900 text-accent-900'>{children}</a>
    </Link>
  );
};

export default Button;
