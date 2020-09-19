import React, { forwardRef, useContext } from 'react';
import { useObserver } from 'mobx-react';

import Duck from '../Shared/Duck';
import { MobxContext } from './mobx';

const MobxDuck = forwardRef(({ id }, ref) => {
  const store = useContext(MobxContext);

  return useObserver(() => (
    <Duck
      ref={ref}
      visible={store[id].visible}
      onClick={() => store.toggle(id)}
    />
  ));
});

export default MobxDuck;
