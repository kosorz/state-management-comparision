import React, { createContext, useState } from 'react';

export const DataContext = createContext();
export const UpdateDataContext = createContext();

const ContextProvider = ({ children }) => {
  const contextDataSkeleton = {
    sunk: 0,
  };
  for (let i = 0; i < 2000; i++) {
    contextDataSkeleton[i] = { visible: true };
  }
  const [contextData, setContextData] = useState(contextDataSkeleton);

  const toggle = (id) => {
    setContextData((prevData) => {
      return {
        ...prevData,
        sunk: prevData.sunk + prevData[id].visible ? 1 : -1,
        [id]: { visible: !prevData[id].visible },
      };
    });
  };

  return (
    <DataContext.Provider value={contextData}>
      <UpdateDataContext.Provider value={toggle}>
        {children}
      </UpdateDataContext.Provider>
    </DataContext.Provider>
  );
};

export default ContextProvider;
