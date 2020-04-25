import React from 'react';
import Progress from '../components/progress';
import CustomLink from '../components/customLink';

export default () => {
  const counter = Progress();
  return (
    <>
      <div className='bg-white w-screen h-full overflow-x-hidden md:pt-24 pt-16'>
        <div className='fixed top-0 bg-primary-100 h-3 progress'></div>
        <div className='max-w-2xl mx-auto text-center'>
          <svg
            width='213'
            height='213'
            viewBox='0 0 213 213'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='mx-auto'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M106.5 213C165.318 213 213 165.318 213 106.5C213 47.6817 165.318 0 106.5 0C47.6817 0 0 47.6817 0 106.5C0 165.318 47.6817 213 106.5 213ZM106.5 204C160.348 204 204 160.348 204 106.5C204 52.6522 160.348 9 106.5 9C52.6522 9 9 52.6522 9 106.5C9 160.348 52.6522 204 106.5 204Z'
              fill='#2F80ED'
            />
            <path
              d='M168.28 58.9048L175.97 66.5952L84.625 158.026L37.0298 110.345L44.7202 102.655L84.625 142.474L168.28 58.9048Z'
              fill='#2F80ED'
            />
          </svg>
          <h1 className='mt-12 text-xl font-bold'>
            Your message’s been recieved!
          </h1>
          <p className='mt-4 text-base text-primary-100'>
            <CustomLink href={counter <= 0 ? '/' : ''}>
              Click here if you’re not redirected in {counter}
            </CustomLink>
          </p>
        </div>

        <style jsx>
          {`
          .progress {
            animation: inc ${counter}s linear;
            // width: ${counter * 20}%;
          }

          @keyframes inc {
            from {
              width: ${counter * 20}%;
            }
            to {
              width: 0;
            }
          }
        `}
        </style>
      </div>
    </>
  );
};
