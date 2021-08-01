import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
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

interface Props {}

const NavBar = (props: Props) => {
  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='fixed w-screen px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-20'>
              {/* Logo */}
              <div className='flex-1 h-full flex items-center justify-start sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                    alt='Workflow'
                  />
                </div>
              </div>

              {/* Menu for big screens */}
              <div className='hidden sm:block sm:h-full'>
                {/** inline block instead? */}
                <div className='flex h-full space-x-4 items-center'>
                  {navigation.map((item, index) => (
                    <Link key={item.name} href={item.href}>
                      <a>
                        <div className='font-mono text-accent-800 inline'>
                          {String(index).padStart(2, '0') + '. '}
                        </div>
                        <div className='text-primary-100 hover:text-accent-800 inline'>
                          {item.name}
                        </div>
                      </a>
                    </Link>
                  ))}
                  <Button href='#'>Resume</Button>
                </div>
              </div>

              {/* Button for Mobile */}
              <Disclosure.Button className='flex items-center sm:hidden'>
                {open ? (
                  <XIcon
                    className='text-primary-100 block h-6 w-6'
                    aria-hidden='true'
                  />
                ) : (
                  <MenuIcon
                    className='text-primary-100 block h-6 w-6'
                    aria-hidden='true'
                  />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='flex flex-col px-2 pt-2 pb-3 space-y-4 items-center'>
              {navigation.map((item, index) => (
                <Link key={item.name} href={item.href}>
                  <a>
                    <div className='font-mono text-accent-800 inline'>
                      {String(index).padStart(2, '0') + '. '}
                    </div>
                    <div className='text-primary-100 hover:text-accent-800 inline'>
                      {item.name}
                    </div>
                  </a>
                </Link>
              ))}
              <Button href='#'>Resume</Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
