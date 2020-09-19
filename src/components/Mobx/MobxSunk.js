import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';

import Sunk from '../Shared/Sunk';
import { MobxContext } from './mobx';

const MobxSunk = () => {
  const store = useContext(MobxContext);

  return useObserver(() => <Sunk sunk={store.sunk} />);
};

export default MobxSunk;
