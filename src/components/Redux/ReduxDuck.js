import React, { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Duck from '../Shared/Duck';
import { toggle } from './ducksSlice';

const ReduxDuck = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const duck = useSelector((state) => state.ducks[props.id]);

  return (
    <Duck
      ref={ref}
      onClick={() => {
        dispatch(toggle(props.id));
      }}
      visible={duck.visible}
    />
  );
});

export default ReduxDuck;
