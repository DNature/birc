import React from 'react';
import { IoIosMail, IoMdCall, IoMdPin } from 'react-icons/io';
import { useRouter } from 'next/router';

import MainLayout from '../components/layouts/layout';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactPage = () => {
  const router = useRouter();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'Contact from divinehycenth.com',
        ...values,
      }),
    })
      .then(() => {
        console.log('message sent');
        return setTimeout(() => {
          return router.push('/sent');
        }, 1000);
      })
      .catch((e) => console.log(e));
  };

  return (
    <MainLayout pathname='/contact'>
      <div className='w-full bg-black relative -z-10  after after-2'>
        <div
          className='w-full h-full overflow-hidden absolute top-0 left-0 -z-5 bg-no-repeat bg-cover bg-center opacity-50'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
          }}
        ></div>
        <div className='container py-32 sm:py-40 md:py-40 z-20'>
          <h1 className='text-center text-xl sm:text-3xl lg:text-4xl font-bold text-white'>
            We’d Love to hear from you
          </h1>
          <p className='pb-56 text-center font-bold text-white'>
            Contact us using the form bellow and i’ll get back to you right away
          </p>
        </div>
      </div>

      <div className='container -mt-64 mb-20'>
        <div className='block max-w-4xl md:flex mx-auto justify-between'>
          <div className='bg-white shadow-2xl rounded-lg p-5'>
            <h2 className='text-xl xl:text-2xl  g100 font-bold'>
              Fill out the form and we’ll be in touch as soon as possible.
            </h2>

            <form name='Contact form for birc.com' onSubmit={handleSubmit}>
              <div className='my-8'>
                <input
                  type='text'
                  name='name'
                  onChange={handleChange}
                  className='p-6 bg-gray-15 rounded-sm w-full outline-none'
                  required
                  placeholder='Full Name'
                  autoFocus
                  value={values.name}
                />
              </div>
              <div className='my-8'>
                <input
                  type='text'
                  name='email'
                  onChange={handleChange}
                  className='p-6 bg-gray-15 rounded-sm w-full outline-none'
                  required
                  placeholder='Email'
                  value={values.email}
                />
              </div>
              <div className='my-8'>
                <textarea
                  onChange={handleChange}
                  name='message'
                  className='p-6 bg-gray-15 rounded-sm w-full h-40 outline-none resize-none'
                  required
                  placeholder='How can i help?...'
                  value={values.message}
                />
              </div>

              <button
                type='submit'
                className='gradient py-3 w-full text-white shadow-primary font-bold rounded-full hover:opacity-75 mb-8 mt-10'
              >
                Send
              </button>
            </form>
          </div>
          <div className='md:mt-0 md:ml-12 mt-16 lg:ml-20 self-end'>
            <div className='gradient shadow-primary  shadow-2xl rounded-lg mt-auto h-full p-6'>
              <img src='/logo-white.svg' alt='Logo' className='mb-8 h-20' />

              <div className='text-white flex'>
                <IoIosMail className='text-white text-xl lg:text-2xl lg:mr-7' />
                <a
                  href='malto:divinehycenth@outlook.com'
                  className='ml-6 lg:text-lg'
                >
                  info@birc-ltd.com
                </a>
              </div>
              <div className='text-white flex  my-6'>
                <IoMdCall className='text-white text-xl lg:text-2xl lg:mr-7' />
                <span className='ml-6 lg:text-lg'>+234 801 016 12599</span>
              </div>
              <div className='text-white flex  my-6'>
                <IoMdCall className='text-white text-xl lg:text-2xl lg:mr-7 opacity-0' />
                <span className='ml-6 lg:text-lg'>+44 74 2337 3762</span>
              </div>
              <div className='text-white flex'>
                <IoMdPin className='text-white text-xl lg:text-2xl lg:mr-7' />
                <span className='ml-6 lg:text-lg'>
                  Suite 16, MJ Plaza, Sylvester Ugo Crescent, off Olu Awotesu
                  Street, Jabi, Abuja.
                </span>
              </div>
              <div className='text-white flex'>
                <IoMdPin className='text-white text-xl lg:text-2xl lg:mr-7' />
                <span className='ml-6 lg:text-lg'>
                  UK Office:11, Berecroft CM18 7SA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
