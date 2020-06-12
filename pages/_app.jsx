import React, { useEffect } from 'react';
import Aos from 'aos';
import '../styles/tailwind.css';
import 'aos/dist/aos.css';

export default ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 250 });
  }, []);
  return <Component {...pageProps} />;
};
