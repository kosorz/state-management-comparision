import React, { useContext } from 'react';
import { MobxContext } from './mobx';
import { useObserver } from 'mobx-react';

const MobxSummary = () => {
  const store = useContext(MobxContext);

  return useObserver(() => (
    <div className={'Summary'}>
      <div>{store.summary}</div>
    </div>
  ));
};

export default MobxSummary;
