import React from 'react';
import { useRecoilValue } from 'recoil';

import Sunk from '../Shared/Sunk';
import { ducksSunk } from './atoms';

const RecoilSunk = () => {
  const sunk = useRecoilValue(ducksSunk);

  return <Sunk sunk={sunk} />;
};

export default RecoilSunk;
