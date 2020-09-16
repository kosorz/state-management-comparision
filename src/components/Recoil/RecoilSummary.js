import React from 'react';
import { useRecoilValue } from 'recoil';
import { pixelsSummary } from './atoms';

const RecoilSummary = () => {
  const summary = useRecoilValue(pixelsSummary);
  return <div className={'Summary'}>{summary}</div>;
};

export default RecoilSummary;
