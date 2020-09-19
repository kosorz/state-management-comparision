import React, { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Duck from '../Shared/Duck';
import { toggle } from './ducksSlice';

const ReduxDuck = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const pixel = useSelector((state) => state.pixels[props.id]);

  return (
    <Duck
      ref={ref}
      onClick={() => {
        dispatch(toggle(props.id));
      }}
      visible={pixel.visible}
    />
  );
});

export default ReduxDuck;
