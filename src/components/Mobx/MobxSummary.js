import React, { useContext } from 'react';
import { MobxContext } from './mobx';
import { useObserver } from 'mobx-react';

const MobxSummary = () => {
  const store = useContext(MobxContext);
  return useObserver(() => <div className={'Summary'}>{store.summary}</div>);
};

export default MobxSummary;
