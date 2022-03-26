import React from 'react';
import { Link } from 'react-router-dom';

import { HeartIcon, EditIcon } from '../icons';

import PageTitle from '../components/Typography/PageTitle';
import SectionTitle from '../components/Typography/SectionTitle';
import CTA from '../components/CTA';
import { Button } from '@windmill/react-ui';

function Suppliers() {
  return (
    <>
      <PageTitle>Suppliers</PageTitle>

      <section className='bg-white dark:bg-gray-900'>
        <div className='container px-6 py-10 mx-auto'>
          <h1 className='text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white'>
            Our <span className='text-blue-500'>Suppliers Team</span>
          </h1>

          <p className='max-w-2xl mx-auto my-6 text-center text-gray-600 dark:text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2'>
            <div className='px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent'>
              <div className='flex flex-col sm:-mx-4 sm:flex-row'>
                <img
                  className='flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300'
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                  alt=''
                />

                <div className='mt-4 sm:mx-4 sm:mt-0'>
                  <h1 className='text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white'>
                    arthur melo
                  </h1>

                  <p className='mt-2 text-gray-600 capitalize dark:text-gray-200 group-hover:text-gray-300'>
                    Company Name
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-600 capitalize  dark:text-gray-200 hover:text-gray-300 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                nesciunt officia aliquam neque optio? Cumque facere numquam est.
              </p>

              <div className='flex mt-4 -mx-2'>
                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Reddit'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Facebook'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Github'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className='px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent'>
              <div className='flex flex-col sm:-mx-4 sm:flex-row'>
                <img
                  className='flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300'
                  src='https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                  alt=''
                />

                <div className='mt-4 sm:mx-4 sm:mt-0'>
                  <h1 className='text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white'>
                    Amelia. Anderson
                  </h1>

                  <p className='mt-2 text-gray-600 capitalize dark:text-gray-200 group-hover:text-gray-300'>
                    Company Name
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-600 capitalize dark:text-gray-200 group-hover:text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                nesciunt officia aliquam neque optio? Cumque facere numquam est.
              </p>

              <div className='flex mt-4 -mx-2'>
                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Reddit'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Facebook'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Github'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className='px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent'>
              <div className='flex flex-col sm:-mx-4 sm:flex-row'>
                <img
                  className='flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300'
                  src='https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                  alt=''
                />

                <div className='mt-4 sm:mx-4 sm:mt-0'>
                  <h1 className='text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white'>
                    Olivia Wathan
                  </h1>

                  <p className='mt-2 text-gray-600 capitalize dark:text-gray-200 group-hover:text-gray-300'>
                    Company Name
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-600 capitalize dark:text-gray-200 group-hover:text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                nesciunt officia aliquam neque optio? Cumque facere numquam est.
              </p>

              <div className='flex mt-4 -mx-2'>
                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Reddit'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Facebook'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Github'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className='px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent'>
              <div className='flex flex-col sm:-mx-4 sm:flex-row'>
                <img
                  className='flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300'
                  src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                  alt=''
                />

                <div className='mt-4 sm:mx-4 sm:mt-0'>
                  <h1 className='text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white'>
                    John Doe
                  </h1>

                  <p className='mt-2 text-gray-600 capitalize dark:text-gray-200 group-hover:text-gray-300'>
                    Company Name
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-600 capitalize dark:text-gray-200 group-hover:text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                nesciunt officia aliquam neque optio? Cumque facere numquam est.
              </p>

              <div className='flex mt-4 -mx-2'>
                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Reddit'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Facebook'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='mx-2 text-gray-600 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 group-hover:text-white'
                  aria-label='Github'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Suppliers;
