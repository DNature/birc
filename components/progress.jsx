import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  const [counter, setCounter] = useState(5);

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    if (counter <= 0) {
      router.push('/');
    }
    return () => clearInterval(timer);
  }, [counter]);

  return counter;
};
