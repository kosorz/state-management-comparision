import React, { createElement, createRef, useRef } from 'react';
import DucksBox from './DucksBox';

const Ducks = ({ duck, sunk }) => {
  const refs = [];
  for (let i = 0; i < 2000; i++) {
    refs.push(createRef());
  }
  const combinedRef = useRef(refs);

  function renderDucks() {
    const ducks = [];

    for (let i = 0; i < 2000; i++) {
      ducks.push(
        createElement(duck, {
          id: i,
          key: `duck-${i}`,
          ref: refs[i],
        })
      );
    }

    return ducks;
  }

  return (
    <div className="Ducks">
      {createElement(sunk)}
      <hr />
      <DucksBox ref={combinedRef} ducks={renderDucks()} />
    </div>
  );
};

export default Ducks;
