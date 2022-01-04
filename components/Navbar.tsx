import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cn from 'classnames';

import Container from './Container';
import MobileMenu from './MobileMenu';

import { NavItem } from '../lib/types';

const NavItem: React.FC<NavItem> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath == href;
  return (
    <NextLink href={href} passHref>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-accent-900'
            : 'font-normal text-primary-200',
          'sm:py-2 rounded-lg hover:text-accent-800 transition-all'
        )}
      >
        {text}
      </a>
    </NextLink>
  );
};

interface NavbarProps {
  navigation: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  return (
    <div className=''>
      <MobileMenu navigation={navigation} />
      <Container>
        <nav className='hidden md:flex md:justify-between h-20 items-center'>
          <div className=''>
            {/* Logo */}
            <NavItem href='/' text='Home' />
          </div>
          <div className='flex gap-x-3'>
            {navigation.map(({ href, text }: NavItem) => (
              <NavItem key={href} href={href} text={text} />
            ))}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
