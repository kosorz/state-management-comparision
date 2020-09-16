import React, { forwardRef, useState, useEffect } from 'react';
import Slider from 'rc-slider';
import openSocket from 'socket.io-client';
import 'rc-slider/assets/index.css';

import { useDebounce } from '../../util/useDebounce';

const PixelsBox = forwardRef(({ pixels }, ref) => {
  const [boxesCount, setBoxesCount] = useState(1000);
  const [ms, setMs] = useState(100);
  const debouncedBoxesCount = useDebounce(boxesCount, 2);

  useEffect(() => {
    function hideBoxes() {
      for (let i = boxesCount - 1; i >= 0; i = i - 1) {
        function toggleBox() {
          ref &&
            ref.current &&
            ref.current[i] &&
            ref.current[i].current &&
            ref.current[i].current.click();
        }

        setTimeout(toggleBox, (boxesCount - i) * ms);
        setTimeout(toggleBox, boxesCount * ms + i);
      }
    }

    const socket = openSocket(`http://localhost:8080/`);

    socket.on('start', () => hideBoxes());

    return () => {
      socket.close();
    };
  }, [boxesCount, ms, ref]);

  return (
    <>
      Boxes: {boxesCount}
      <Slider
        className="SliderAdjust"
        min={0}
        max={2000}
        value={boxesCount}
        onChange={setBoxesCount}
      />
      Ms: {ms}
      <Slider
        className="SliderAdjust"
        min={0}
        max={100}
        value={ms}
        onChange={setMs}
      />
      <div className="PixelsBox">{pixels.slice(0, debouncedBoxesCount)}</div>
    </>
  );
});

export default PixelsBox;
