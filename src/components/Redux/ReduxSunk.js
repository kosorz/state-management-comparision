import React from 'react';
import { useSelector } from 'react-redux';

import Sunk from '../Shared/Sunk';
import { selectSunk } from './ducksSlice';

const ReduxSunk = () => {
  const sunk = useSelector(selectSunk);

  return <Sunk sunk={sunk} />;
};

export default ReduxSunk;
