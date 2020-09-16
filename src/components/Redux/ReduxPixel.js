import React, { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './pixelsSlice';

const PixelItem = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const pixel = useSelector((state) => state.pixels[props.id]);

  return (
    <div
      ref={ref}
      onClick={() => {
        dispatch(toggle(props.id));
      }}
      className={`Pixel ${pixel.visible ? 'PixelVisible' : 'PixelInvisible'}`}
    />
  );
});

export default React.memo(PixelItem);
