import React, { useState } from 'react';
import MainLayout from '../../components/layouts/layout';

const About = () => {
  return (
    <MainLayout pathname='/about' className='relative'>
      <div className='w-full relative mt-24'>
        <div
          className='absolute top-0 left-0 bottom-0 right-0'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            zIndex: 1,
          }}
        />
        <div
          className='bg-black top-0 left-0 right-0 bottom-0 absolute opacity-75'
          style={{ zIndex: 2 }}
        />

        <div
          className='container py-24 text-white mx-auto relative h-full max-w-2xl mx-auto py-8 '
          style={{ zIndex: 3 }}
        >
          <h2 className='text-white text-2xl font-bold'>BLOG</h2>
          <div className='my-4 h-2 bg-gray-25 lg:w-1/6 w-2/6' />
        </div>
      </div>

      {/* blog Birc */}
      <div className='relative'>
        {/* Partners */}
        <div className='bg-gray-15 relative'>
          <div className='container mx-auto max-w-2xl py-20 after before'>
            <div className='mb-20'>
              <h2 className='text-xl font-bold text-gray-100'>
                WE ONLY PARTNER WITH TOP CLASS FIRMS
              </h2>

              <div className='my-4 h-2 bg-gray-100 lg:w-1/6 w-2/6'></div>
            </div>

            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='rounded md:w-56'
                  src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80'
                  alt='Woman paying for a purchase'
                />
              </div>
              <div className='mt-4 md:mt-0 md:ml-6'>
                <a
                  href='#'
                  className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline focus:text-primary-100'
                >
                  IT Support LTD.
                </a>
                <p className='mt-2 text-gray-600'>
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
            <div className='md:flex mt-6'>
              <div className='md:flex-shrink-0'>
                <img
                  className='rounded md:w-56'
                  src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                  alt='Woman paying for a purchase'
                />
              </div>
              <div className='mt-4 md:mt-0 md:ml-6'>
                <a
                  href='#'
                  className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'
                >
                  Finding customers for your new business
                </a>
                <p className='mt-2 text-gray-600'>
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Management */}
        <div className='relative'>
          <div className='container mx-auto max-w-2xl py-20 after'>
            <div className='mb-10'>
              <h2 className='text-xl font-bold text-gray-100'>
                OUR MANAGEMENT
              </h2>

              <div className='my-4 h-2 bg-gray-100 lg:w-1/6 w-2/6'></div>
            </div>

            <div className=''>
              <p className='text-lg font-semibold'>
                BIRC is under the Leadership of four professionals as Directors
                with:
              </p>

              <ul className='mt-10 pl-6'>
                <li className='mb-6'>
                  <b>- Academic Pedigree: </b> ABU, UNIJOS University of
                  Wolverhampton , SMC University, Law school
                </li>

                <li className='mb-6'>
                  <b>- Professional Pedigree: </b>UBA, Access Bank, Leadway
                  Pensure, Ernst & Young, Pitney Bowes etc
                </li>
                <li className='mb-6'>
                  <b>- Stability and Conservatism </b>
                </li>
                <li className='mb-6'>
                  <b>- Driven by Excellence </b>
                </li>
                <li className='mb-6'>
                  <b>- Technical soundness in our core competence areas: </b>
                  Human Resources Consulting , Strategy , Capacity Building (
                  Training) & Risk Management
                </li>
              </ul>
            </div>

            <h2 className='text-xl mt-20 font-bold text-gray-100'>
              MEET THE TEAM
            </h2>
            <div className='my-4 h-2 bg-gray-100 lg:w-1/6 w-2/6'></div>

            {/* Dahiru */}
            <div className=''>
              <div className='md:flex mt-6'>
                <div className='md:flex-shrink-0'>
                  <img
                    className='rounded md:w-56'
                    src='/images/users/rector.jpg'
                    alt='Woman paying for a purchase'
                  />
                </div>
                <div className='mt-4 md:mt-0 md:ml-6 lg:pt-12'>
                  <a
                    href='#'
                    className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'
                  >
                    Dr. Dahiru Sani
                  </a>
                  <p className='mt-2 text-gray-600'>
                    Rector and DG Kaduna Business School, Enterprise Institute..
                    Holds a PhD in Finance. Passionate about empowering the next
                    generation and making the world a better place.
                  </p>
                </div>
              </div>
            </div>

            <hr className='my-20 text-gray-25' />
            {/* Henry */}
            <div className=''>
              <div className='md:flex mt-6 flex-col-reverse md:flex-row'>
                <div className='mt-4 md:mt-0 md:ml-6 lg:pt-6 lg:pr-6 md:text-right'>
                  <a
                    href='#'
                    className='block mt-1 text-lg  leading-tight font-semibold text-gray-900 hover:underline'
                  >
                    Henry Bada.
                  </a>
                  <p className='mt-2 text-gray-600 '>
                    Principal Consultant (IM) BIRC, Regional Business
                    Adviser/Analyst. Hpierson Associates. Associate Consultant
                    KBS. Holds a Masters in Strategic Information Management.
                    Passionate about Innovative Entrepreneurship
                  </p>
                </div>
                <div className='md:flex-shrink-0'>
                  <img
                    className='rounded md:w-56 mx-auto md:mx-px mt-6 md:mt-0'
                    src='/images/users/henry.jpg'
                    alt='Woman paying for a purchase'
                  />
                </div>
              </div>
            </div>

            <hr className='my-20 text-gray-25' />

            {/* Dahiru */}
            <div className=''>
              <div className='md:flex mt-6'>
                <div className='md:flex-shrink-0'>
                  <img
                    className='rounded md:w-56'
                    src='/images/users/ibrahim.jpg'
                    alt='Woman paying for a purchase'
                  />
                </div>
                <div className='mt-4 md:mt-0 md:ml-6 lg:pt-12'>
                  <a
                    href='#'
                    className='block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline'
                  >
                    Ibrahim Bonet
                  </a>
                  <p className='mt-2 text-gray-600'>
                    Regional Manager Leadway, Director Business Development
                    BIRC. Seasoned Banker with an MBA in Business
                    Administration. Passionate about Risk Management and
                    Strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Choose us */}
        <div className='bg-gray-15'>
          <div className='container mx-auto max-w-2xl py-20'>
            <div className='mb-12'>
              <h2 className='text-xl font-bold text-gray-100'>
                CHOOSE US FOR OUR:
              </h2>

              <div className='my-4 h-2 bg-gray-100 lg:w-1/6 w-2/6'></div>
            </div>

            <div className='my-12'>
              <div>
                <h3 className='font-semibold text-lg'>
                  {' '}
                  1. History of Performance
                </h3>
                <div className='my-6 pl-6'>
                  <p className='mb-6'>
                    - Within a decade we have delivered superior solutions to
                    over 30 clients.
                  </p>
                </div>
              </div>
              <div>
                <h3 className='font-semibold text-lg'>
                  {' '}
                  2. Quality of our Technical Team
                </h3>
                <div className='my-6 pl-6'>
                  <p className='mb-6'>
                    - Our firm has a unique team of consultants across our
                    various practice areas with extensive exposure and
                    experience in their specific areas of competence. They are
                    experienced professionals with diverse backgrounds who serve
                    in our practice areas.
                  </p>
                </div>
              </div>
              <div>
                <h3 className='font-semibold text-lg'>
                  {' '}
                  3. A Blend of Local and International Best Practice Experience
                </h3>
                <div className='my-6 pl-6'>
                  <p className='mb-6'>
                    - Our team brings to each project, the best of global and
                    local exposures from our consultants and the practicability
                    of same, within our environment.
                  </p>
                </div>
              </div>

              <div>
                <h3 className='font-semibold text-lg'>
                  4. Our Professionalism
                </h3>
                <div className='my-6 pl-6'>
                  <p className='mb-6'>
                    - We abide by the principles of Consultancy and always
                    ensure superior value for our clients in meeting their
                    business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </MainLayout>
  );
};

export default About;
