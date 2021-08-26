import React, { Fragment, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Button from './Button';
import { NavContext } from '../context/navContext';

type NavItem = {
  name: string;
  navRef: any;
  current?: boolean;
};

interface NavLinkProps extends NavItem {
  index: number;
  close?: any;
}

const NavLink: React.FC<NavLinkProps> = ({ name, navRef, close }) => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        console.log(navRef);
        if (!navRef) {
          router.push('/');
        } else {
          navRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        if (close) close();
      }}
      className='inline-flex text-primary-100 hover:text-accent-800 transition-colors transition-duration-50 ease-in'
    >
      {name}
    </button>
  );
};

const NavBar = () => {
  const router = useRouter();

  const { state } = useContext(NavContext);

  const navigation: NavItem[] = [
    { name: 'About', navRef: state.aboutRef, current: true },
    { name: 'Experience', navRef: '#', current: false },
    { name: 'Projects', navRef: '#', current: false },
    { name: 'Contact', navRef: '#', current: false },
  ];

  return (
    <Disclosure>
      {({ open }) => (
        <>
          {/* Main Navbar Starts */}
          <nav className='fixed bg-primary-900 opacity-95 inset-0 z-40 w-full h-24 sm:h-36 px-8 sm:px-16'>
            {/* Container for navbar elements */}
            <div className='flex justify-between h-full items-center gap-x-5'>
              {/* Logo */}
              <div className='inline-flex'>
                <Link href='/'>
                  <button
                    onClick={async () => {
                      router.push('/');
                      close && close();
                    }}
                    className='inline-flex text-primary-100 hover:text-accent-800 transition-colors transition-duration-50 ease-in'
                  >
                    <img
                      className='block w-8 h-8'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                      alt='Workflow'
                    />
                  </button>
                </Link>
              </div>
              {/* Nav Links for Big Screens */}
              <div className='hidden sm:block'>
                <div className='flex gap-x-5 md:gap-x-10 items-center'>
                  {navigation.map((item: NavItem, index) => (
                    <NavLink
                      key={item.name}
                      index={index}
                      name={item.name}
                      navRef={item.navRef}
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
            {({ close }) => (
              <Transition.Root show={open}>
                <div className='fixed inset-0 overflow-hidden'>
                  <Transition.Child
                    as={Fragment}
                    enter='transition opacity filter ease-in-out duration-150'
                    enterFrom='opacity-0 filter-none'
                    enterTo='opacity-100 filter'
                    leave='transition opacity filter ease-in-out duration-150'
                    leaveFrom='opacity-100 filter'
                    leaveTo='opacity-0 filter-none'
                  >
                    {/* Overlay */}
                    <div className='absolute inset-0 bg-black bg-opacity-75 backdrop-blur-lg'></div>
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter='transition transform ease-in-out duration-150'
                    enterFrom='translate-x-full'
                    enterTo='translate-x-0'
                    leave='transition transform ease-in-out duration-150'
                    leaveFrom='translate-x-0'
                    leaveTo='translate-x-full'
                  >
                    <div className='relative bg-primary-900 h-full opacity-75 firefox:opacity-95'>
                      <div className='flex flex-col h-full gap-y-10 justify-center items-center'>
                        {navigation.map((item: NavItem, index) => (
                          <NavLink
                            key={item.name}
                            index={index}
                            name={item.name}
                            navRef={item.navRef}
                            close={close}
                          />
                        ))}
                        <Button href=''>Resume</Button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Transition.Root>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
