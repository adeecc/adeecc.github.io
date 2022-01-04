import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from 'styles/mobile-menu.module.css';

import { NavItem } from 'lib/types';
import { useRouter } from 'next/router';

interface MobileMenuItemProps extends NavItem {
  toggleFn: () => void;
  hasBorder?: boolean;
  isAnimated?: boolean;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  href,
  text,
  toggleFn,
  hasBorder,
  isAnimated
}) => {
  const router = useRouter();
  const isActive = router.asPath == href;
  const _toggle = () => {
    router.push(href);
    toggleFn();
  };

  return (
    <div
      className={cn(
        'w-full',
        hasBorder ? 'border-b-2 border-primary-300' : '',
        isAnimated ? 'motion-safe:animate-slide-in' : ''
      )}
    >
      <button
        onClick={_toggle}
        className={cn(
          isActive
            ? 'font-semibold text-accent-900'
            : 'font-normal text-primary-200',
          'py-2 hover:text-accent-800 transition-all'
        )}
      >
        {text}
      </button>
    </div>
  );
};

interface MobileMenuProps {
  navigation: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
      setIsMenuOpen(false);
    };
  }, []);

  return (
    // <Container>
    <div className='relative visible md:hidden h-20 flex items-center'>
      <div className='px-10 flex flex-col space-y-10 w-full'>
        <div className='flex justify-between w-full items-center'>
          <button
            onClick={toggleMenu}
            aria-label='Toggle menu'
            type='button'
            className={cn(styles.burger, '')}
          >
            <MenuIcon data-hide={isMenuOpen} />
            <CrossIcon data-hide={!isMenuOpen} />
          </button>
          <div className=''>
            <MobileMenuItem
              href='/'
              text='Home'
              toggleFn={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            />
          </div>
        </div>

        {isMenuOpen && (
          <nav className='p-10 flex flex-col items-start space-y-10 z-[1000] absolute transition-all left-0 right-0 h-screen bg-primary-900'>
            {navigation.map(({ href, text }: NavItem) => (
              <MobileMenuItem
                key={href}
                href={href}
                text={text}
                toggleFn={toggleMenu}
                hasBorder
                isAnimated
              />
            ))}
          </nav>
        )}
      </div>
    </div>
    // </Container>
  );
};

export default MobileMenu;

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className='h-7 w-7 absolute text-gray-900 dark:text-gray-100'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className='h-7 w-7 absolute text-gray-900 dark:text-gray-100'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  );
}
