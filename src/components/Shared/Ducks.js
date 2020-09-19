import React, { createElement, createRef, useRef } from 'react';
import DucksBox from './DucksBox';

const Ducks = ({ pixelComponent, summaryComponent }) => {
  const refs = [];
  for (let i = 0; i < 2000; i++) {
    refs.push(createRef());
  }
  const combinedRef = useRef(refs);

  function renderDucks() {
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
    <div className="Ducks">
      {createElement(summaryComponent)}
      <hr />
      <DucksBox ref={combinedRef} pixels={renderDucks()} />
    </div>
  );
};

export default Ducks;
