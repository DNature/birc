import React, { useState } from 'react';
import MainLayout from '../components/layouts/layout';
import TrainingSection from '../components/training';

const Training = () => {
  return (
    <MainLayout pathname='/training' className='relative'>
      <div className='w-full relative mt-24'>
        <div
          className='absolute top-0 left-0 bottom-0 right-0'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
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
          <h2 className='text-white text-2xl font-bold'>TRAINING</h2>
          <div className='my-4 h-2 bg-gray-25 lg:w-1/6 w-2/6' />
        </div>
      </div>

      {/* About Birc */}
      <div className='relative'>
        <div className='container max-w-2xl mx-auto py-8 after'>
          <div className='mb-12'>
            <h2 className='text-xl font-bold text-gray-100'>
              WHAT WOULD BE THE PARTICIPANTS BENEFITS FROM THIS WORKSHOP.
            </h2>

            <div className='my-4 h-1 bg-gray-100 lg:w-1/6 w-2/6'></div>

            <p className='text-md font-semibold'>
              Participants would derive the following benefits;
            </p>

            <ul className='ml-10'>
              <li>Participants would derive the following benefits;</li>
              <li>
                Review the methods used to investigate fraud and corruption and
                the 0 relationships between managers and investigatory agencies.
              </li>
              <li>
                Advise or train others to combat corruption more effectively.
              </li>
              <li>
                Advise or train others to combat corruption more effectively.
              </li>
              <li>
                Develop a network of contacts in others countries to whom you
                can turn for specialized help and advice.
              </li>
            </ul>
          </div>
        </div>
        <TrainingSection />
      </div>

      {/*  */}
    </MainLayout>
  );
};

export default Training;
