import React, { useContext } from 'react';

import Sunk from '../Shared/Sunk';
import { DataContext } from './context';

const ContextSunk = () => {
  const data = useContext(DataContext);

  return <Sunk sunk={data.sunk} />;
};

export default ContextSunk;
