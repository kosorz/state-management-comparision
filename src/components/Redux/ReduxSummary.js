import React from 'react';
import { useSelector } from 'react-redux';
import { selectSummary } from './pixelsSlice';

const ReduxSummary = () => {
  const summary = useSelector(selectSummary);

  return <div className={'Summary'}>{summary}</div>;
};

export default ReduxSummary;
