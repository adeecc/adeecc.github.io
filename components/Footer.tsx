import React from 'react';
import NextLink from 'next/link';

import Container from './Container';

import { NavItem, SocialItem } from '../lib/types';

interface FooterProps {
  navigation: NavItem[];
  socials: SocialItem[];
}

const Footer: React.FC<FooterProps> = ({ navigation, socials }) => {
  return (
    <Container>
      <div className='mt-24 py-10 px-5 border-t-[1px] border-primary-300 grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Nav */}
        <div className='col-span-1 flex flex-col gap-y-5 items-center md:items-start'>
          {navigation.map((value) => (
            <NextLink key={value.href} href={value.href}>
              <a className='text-primary-200 hover:text-primary-100'>
                {value.text}
              </a>
            </NextLink>
          ))}
        </div>
        {/* Socials */}
        <div className='col-span-1 flex justify-between md:items-start'>
          {socials.map((value) => (
            <a
              key={value.href}
              href={value.href}
              className='text-primary-200 hover:text-primary-100 h-6 w-6'
            >
              {value.icon}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
