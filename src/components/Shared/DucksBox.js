import React, { forwardRef, useState, useEffect } from 'react';
import openSocket from 'socket.io-client';
import 'rc-slider/assets/index.css';

import { useDebounce } from '../../util/useDebounce';

const DucksBox = forwardRef(({ ducks }, ref) => {
  const [elementsCount, setElementsCount] = useState(1000);
  const [ms, setMs] = useState(100);
  const debouncedElementsCount = useDebounce(elementsCount, 2);

  useEffect(() => {
    const socket = openSocket(`http://localhost:8080/`);

    function hideBoxes() {
      for (let i = debouncedElementsCount - 1; i >= 0; i = i - 1) {
        function toggleBox() {
          ref &&
            ref.current &&
            ref.current[i] &&
            ref.current[i].current &&
            ref.current[i].current.click();
        }

        setTimeout(toggleBox, (debouncedElementsCount - i) * ms);
      }
    }

    socket.on('start', () => hideBoxes());
    socket.on('settings', (data) => {
      setElementsCount(data.elements);
      setMs(data.ms);
    });

    return () => {
      socket.close();
    };
  }, [debouncedElementsCount, ms, ref]);

  return (
    <>
      <div>
        <span role="img" aria-label="clock">
          🕰️
        </span>
        Interval: <span className={'Decoration'}>{ms}</span> ms
      </div>
      <div>
        <span role="img" aria-label="clock">
          🧮
        </span>
        Elements: <span className={'Decoration'}>{debouncedElementsCount}</span>{' '}
        pcs
      </div>
      <hr />
      <div className="DucksBox">{ducks.slice(0, debouncedElementsCount)}</div>
      <hr />
    </>
  );
});

export default DucksBox;
