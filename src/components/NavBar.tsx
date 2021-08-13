import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Button from './Button';

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavItem[] = [
  { name: 'About', href: '#', current: true },
  { name: 'Experience', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

interface NavItemProps {
  index: number;
  name: string;
  href: string;
  current?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ name, href, index, current }) => {
  return (
    <Link key={name} href={href}>
      <a>
        <div className='font-mono text-accent-800 inline'>
          {String(index).padStart(2, '0') + '. '}
        </div>
        <div className='text-primary-100 hover:text-accent-800 inline'>
          {name}
        </div>
      </a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          {/* Main Navbar Starts */}
          <nav className='fixed inset-0 z-40 w-full h-24 sm:h-36 px-8 sm:px-16'>
            {/* Container for navbar elements */}
            <div className='flex justify-between h-full items-center'>
              {/* Logo */}
              <div className='inline-flex'>
                <img
                  className='block w-8 h-8'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                  alt='Workflow'
                />
              </div>
              {/* Nav Links for Big Screens */}
              <div className='hidden sm:block'>
                <div className='flex gap-x-7 items-center'>
                  {navigation.map((item: NavItem, index) => (
                    <NavItem
                      key={item.name}
                      index={index}
                      name={item.name}
                      href={item.href}
                    />
                  ))}
                  <Button href=''>Resume</Button>
                </div>
              </div>
              {/* Button for Mobile View */}
              <div className='sm:hidden'>
                <Disclosure.Button className='items-center text-primary-100 p-2 rounded-md hover:text-primary-200 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-100'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-8 w-8' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-8 w-8' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </nav>

          <Disclosure.Panel className='sm:hidden'>
            <div className='absolute inset-0 ml-24 bg-primary-800'>
              <div className='flex flex-col h-full justify-center items-center gap-y-10'>
                {navigation.map((item, index) => (
                  <NavItem
                    key={item.name}
                    index={index}
                    name={item.name}
                    href={item.href}
                  />
                ))}
                <Button href=''>Resume</Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
