import React, { createElement, createRef, useRef } from 'react';
import PixelsBox from './PixelsBox';
import './Styles.css';

const Pixels = ({ pixelComponent, summaryComponent }) => {
  const refs = [];
  for (let i = 0; i < 2000; i++) {
    refs.push(createRef());
  }
  const combinedRef = useRef(refs);

  function renderPixels() {
    const pixels = [];

    for (let i = 0; i < 2000; i++) {
      pixels.push(
        createElement(pixelComponent, {
          id: i,
          key: `pixel-${i}`,
          ref: refs[i],
        })
      );
    }

    return pixels;
  }

  return (
    <div className="Pixels">
      {createElement(summaryComponent)}
      <PixelsBox ref={combinedRef} pixels={renderPixels()} />
    </div>
  );
};

export default Pixels;
