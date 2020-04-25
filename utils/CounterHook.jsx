import { useState, useEffect } from 'react';

export default (callback, initialState = 5) => {
  const [counter, setCounter] = useState(initialState);

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    if (counter <= 0 && callback) {
      return callback();
    }
    return () => clearInterval(timer);
  }, [counter]);

  return counter;
};
