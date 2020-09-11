import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Redux.css';
import {
  increaseByOne,
  updateNestedObject,
  selectCount,
  selectNestedObject,
} from './slice';
import randomObject from '../../util/randomObject';

const Redux = React.forwardRef(({ requestedUpdates }, ref) => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const nestedObject = useSelector(selectNestedObject);

  function startAddingNonBlocking() {
    let reduxCounterIncreaseInterval = setInterval(function () {
      dispatch(increaseByOne());
    });
    setTimeout(function () {
      clearInterval(reduxCounterIncreaseInterval);
    }, requestedUpdates);
  }

  function startAddingBlocking() {
    var start = new Date().getTime();
    for (let i = 0; i < requestedUpdates; i++) {
      dispatch(increaseByOne());
    }
    var end = new Date().getTime();
    console.log(
      `%cRedux ${requestedUpdates} primitive store updates took: ${
        end - start
      }ms`,
      'color:red;'
    );
  }

  function startUpdatingNestedObjectNonBlocking() {
    let reduxCounterIncreaseInterval = setInterval(function () {
      dispatch(updateNestedObject(randomObject()));
    });
    setTimeout(function () {
      clearInterval(reduxCounterIncreaseInterval);
    }, requestedUpdates);
  }

  function startUpdatingNestedObjectBlocking() {
    var start = new Date().getTime();
    for (let i = 0; i < requestedUpdates; i++) {
      dispatch(updateNestedObject(randomObject()));
    }
    var end = new Date().getTime();
    console.log(
      `%cRedux ${requestedUpdates} nested object store updates took: ${
        end - start
      }ms`,
      'color:red;'
    );
  }

  return (
    <div className="Redux">
      <strong>Redux:</strong>
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
      <button ref={ref.current[0]} onClick={startAddingBlocking} />
      <button
        ref={ref.current[1]}
        onClick={startUpdatingNestedObjectBlocking}
      />
    </div>
  );
});

export default Redux;
