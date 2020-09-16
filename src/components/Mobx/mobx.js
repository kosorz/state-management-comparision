import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';

export const MobxContext = createContext();

const MobxProvider = ({ children }) => {
  const storeSkeleton = {
    summary: 0,
    toggle: (id) => {
      store.summary += store[id].visible ? 1 : -1;
      store[id].visible = !store[id].visible;
    },
  };

  for (let i = 0; i < 5000; i++) {
    storeSkeleton[i] = { visible: true };
  }

  const store = useLocalStore(() => storeSkeleton);
  return <MobxContext.Provider value={store}>{children}</MobxContext.Provider>;
};

export default MobxProvider;
