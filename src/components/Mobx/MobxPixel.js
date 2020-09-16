import React, { forwardRef, useContext } from 'react';
import { MobxContext } from './mobx';
import { useObserver } from 'mobx-react';

const PixelItem = forwardRef(({ id }, ref) => {
  const store = useContext(MobxContext);

  return useObserver(() => (
    <div
      ref={ref}
      onClick={() => {
        store.toggle(id);
      }}
      className={`Pixel ${
        store[id].visible ? 'PixelVisible' : 'PixelInvisible'
      }`}
    />
  ));
});

export default React.memo(PixelItem);
