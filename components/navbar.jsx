import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';

import CustomLink from './customLink';
import { useRouter } from 'next/dist/client/router';

const Navbar = ({ pathname, routes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`py-4 justify-center z-20 fixed top-0 left-0 w-full hidden sm:flex ${
          navBackground && 'bg-white shadow-lg brush'
        }`}
      >
        <nav className='flex content-center '>
          <CustomLink href='/' className='my-auto'>
            <img
              src='/logo.svg'
              alt='Logo'
              className={`${
                navBackground ? 'w-16' : 'w-24'
              } mr-10  transition-all duration-200`}
            />
          </CustomLink>
          {routes.map(({ path, name }) => (
            <CustomLink
              key={name}
              className='py-2 mr-6 text-gray-75 font-semibold block'
              href={path}
            >
              <>
                {name}

                {pathname?.split('/')[1] == path.split('/')[1] && (
                  <span className='block mt-3 w-5 h-1 mx-auto text-center bg-primary-100 rounded'></span>
                )}
              </>
            </CustomLink>
          ))}
        </nav>
      </div>

      <div
        className={`z-20 fixed top-0 left-0 w-full py-0 flex flex-col sm:hidden ${
          navBackground && 'bg-primary-100 shadow'
        }`}
      >
        <div className='flex justify-between p-4'>
          <CustomLink href='/'>
            <img
              src={`${!navBackground ? '/logo.svg' : '/logo-white.svg'}`}
              alt='Logo'
              className={`${
                navBackground ? 'w-16' : 'w-24'
              } transition-all duration-200`}
            />
          </CustomLink>
          <button onClick={() => setIsOpen(true)}>
            <FiMenu
              className={`text-2xl my-auto ${
                navBackground ? 'text-white' : 'text-gray-100'
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        data-isopen={isOpen}
        className='fixed top-0 left-0 w-full z-50 py-6 h-screen overflow-hidden bg-primary-100 translate-x-56 flex flex-col'
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.25s ease-in-out',
        }}
      >
        <div className='flex px-4 justify-between'>
          <CustomLink href='/'>
            <img
              src={`/logo-white.svg`}
              alt='Logo'
              className='w-16'
              onClick={handleClose}
            />
          </CustomLink>
          <button onClick={handleClose}>
            <IoMdClose className='text-white text-2xl my-auto' />
          </button>
        </div>
        <hr className='my-6 text-white' />
        <span className='flex-1'>
          {routes.map(({ path, name, icon }) => (
            <CustomLink
              key={name}
              className={`py-2 mr-6 text-white font-semibold block p-2 hover mx-4`}
              href={path}
            >
              <>
                {icon}
                {name}

                {pathname?.split('/')[1] == path.split('/')[1] && (
                  <span className='block mt-3 w-full h-1 mx-auto text-center bg-white rounded bg-gray-400'></span>
                )}
              </>
            </CustomLink>
          ))}
        </span>

        <div className='col-span-6 text-center mt-6'>
          <p className='text-gray-25 text-sm'>
            &copy; Copyright 2020. birc.com
          </p>
        </div>
      </nav>
    </>
  );
};

Navbar.getInitialProps = async () => {
  const { pathname } = useRouter();

  return { pathname };
};

Navbar.propTypes = {
  pathname: PropTypes.string,
  routes: PropTypes.array.isRequired,
};
export default Navbar;
