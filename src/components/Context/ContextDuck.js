import React, { forwardRef, useContext } from 'react';

import Duck from '../Shared/Duck';
import { DataContext } from './context';
import { UpdateDataContext } from './context';

const ContextDuck = forwardRef(({ id }, ref) => {
  const data = useContext(DataContext);
  const updateData = useContext(UpdateDataContext);

  return (
    <Duck ref={ref} visible={data[id].visible} onClick={() => updateData(id)} />
  );
});

export default ContextDuck;
