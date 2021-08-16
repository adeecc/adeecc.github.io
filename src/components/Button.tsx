import React from 'react';
import Link from 'next/link';

interface Props {
  href: string | '';
}

const Button: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className='py-4 px-6 border rounded-sm border-accent-900 text-accent-900 transition transition-duration-150 ease-in hover:border-accent-100 hover:text-accent-100'>
        {children}
      </a>
    </Link>
  );
};

export default Button;
