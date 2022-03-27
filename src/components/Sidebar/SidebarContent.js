import React from 'react';
import routes from '../../routes/sidebar';
import { NavLink, Route } from 'react-router-dom';
import * as Icons from '../../icons';
import SidebarSubmenu from './SidebarSubmenu';
// import { Button } from '@windmill/react-ui'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  return (
    <>
    <div className='py-4  text-gray-500 dark:text-gray-400'>
      <a
        className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'
        href='#'
      >
        Storek
      </a>
      <ul className='mt-12'>
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className='relative px-6 py-3' key={route.name}>
              <NavLink
                exact
                to={route.path}
                className='inline-flex items-center w-full text-sm font-medium transition-colors duration-150  dark:hover:text-gray-200'
                activeClassName=' px-4 py-2 text-white bg-blue-500 rounded-md dark:bg-blue-700 dark:text-gray-200'
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className='absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg'
                    aria-hidden='true'
                  ></span>
                </Route>
                <Icon
                  className='w-5 h-5'
                  aria-hidden='true'
                  icon={route.icon}
                />
                <span className='ml-4'>{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
    
      <div className='px-3 mt-32 '>
        <NavLink to ='/login'>
        <button class='flex w-full items-center text-base  justify-center px-2 py-2  tracking-wide  capitalize transition-colors duration-200 transform  rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80  bg-transparent  text-red-500 dark:text-gray-100 font-semibold hover:text-white  border border-red-500 hover:border-transparent '>
          
          <svg className='w-5 h-5 mx-1 '
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
            />
          </svg>
          <span class='mx-1'>Log out</span>
        </button>
        </NavLink>
      </div>
    </div>
    </>
  );
}

export default SidebarContent;
