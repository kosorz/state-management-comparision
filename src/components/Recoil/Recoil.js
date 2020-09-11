import React, { createElement, createRef } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import RecoilPixel from './RecoilPixel';

import randomObject from '../../util/randomObject';
import { countState, nestedObjectState } from './atoms';

import './Recoil.css';

const Recoil = React.forwardRef(({ requestedUpdates }, ref) => {
  const setCount = useSetRecoilState(countState);
  const setNestedObject = useSetRecoilState(nestedObjectState);
  const count = useRecoilValue(countState);
  const nestedObject = useRecoilValue(nestedObjectState);
  const refs = [];

  for (let i = 0; i <= requestedUpdates; i++) {
    refs.push(createRef(null));
  }

  function startAddingNonBlocking() {
    let recoilCounterIncreaseInterval = setInterval(function () {
      setCount((oldCountDown) => oldCountDown + 1);
    });

    setTimeout(function () {
      clearInterval(recoilCounterIncreaseInterval);
    }, requestedUpdates);
  }

  function startAddingBlocking() {
    var start = new Date().getTime();
    for (let i = 0; i < requestedUpdates; i++) {
      setCount((oldCountDown) => oldCountDown + 1);
    }
    var end = new Date().getTime();
    console.log(
      `%cRecoil ${requestedUpdates} primitive store updates took: ${
        end - start
      }ms`,
      'color:yellow;'
    );
  }

  function startUpdatingNestedObjectNonBlocking() {
    let recoilCounterIncreaseInterval = setInterval(function () {
      setNestedObject((oldNestedObject) => {
        return { changes: oldNestedObject.changes + 1, value: randomObject() };
      });
    });

    setTimeout(function () {
      clearInterval(recoilCounterIncreaseInterval);
    }, requestedUpdates);
  }

  function startUpdatingNestedObjectBlocking() {
    var start = new Date().getTime();
    for (let i = 0; i < requestedUpdates; i++) {
      setNestedObject((oldNestedObject) => {
        return { changes: oldNestedObject.changes + 1, value: randomObject() };
      });
    }
    var end = new Date().getTime();
    console.log(
      `%cRecoil ${requestedUpdates} nested object atom updates took: ${
        end - start
      }ms`,
      'color:yellow;'
    );
  }

  function renderPixels() {
    const pixels = [];

    for (let i = 0; i <= requestedUpdates; i++) {
      pixels.push(
        createElement(RecoilPixel, {
          id: i,
          key: `pixel-${i}`,
          ref: refs[i],
        })
      );
    }

    return pixels;
  }

  function hidePixels() {
    for (let i = requestedUpdates; i >= 0; i = i - 1) {
      setTimeout(function () {
        refs[i].current.click();
      }, 15 * i);
    }
  }

  return (
    <div className="Recoil">
      <strong>Recoil:</strong>
      <br></br>
      Blocking primitive updates: {count}
      <br></br>
      Blocking object updates: {nestedObject.changes}
      <br></br>
      {JSON.stringify(nestedObject).slice(0, 50)}
      <div>
        <button onClick={startAddingNonBlocking}>Non Blocking Adding</button>
        <button onClick={startUpdatingNestedObjectNonBlocking}>
          Non Blocking Updating
        </button>
      </div>
      <div className="PixelsBox">
        <button onClick={hidePixels}>Hide pixels one by one</button>
        {renderPixels()}
      </div>
      <button ref={ref.current[0]} onClick={startAddingBlocking} />
      <button
        ref={ref.current[1]}
        onClick={startUpdatingNestedObjectBlocking}
      />
    </div>
  );
});

export default Recoil;
