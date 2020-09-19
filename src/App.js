import React, { useState } from 'react';

import Title from './components/Shared/Title';
import Controls from './components/Shared/Controls';
import Ducks from './components/Shared/Ducks';

import { RecoilRoot } from 'recoil';
import RecoilDuck from './components/Recoil/RecoilDuck';
import RecoilSunk from './components/Recoil/RecoilSunk';

import { Provider } from 'react-redux';
import ReduxDuck from './components/Redux/ReduxDuck';
import ReduxSunk from './components/Redux/ReduxSunk';
import store from './components/Redux/store';

import MobxProvider from './components/Mobx/mobx';
import MobxDuck from './components/Mobx/MobxDuck';
import MobxSunk from './components/Mobx/MobxSunk';

import ContextProvider from './components/Context/context';
import ContextDuck from './components/Context/ContextDuck';
import ContextSunk from './components/Context/ContextSunk';

import './App.css';

const App = () => {
  const [currentLibrary, setCurrentLibrary] = useState('mobx');

  const librarySetups = {
    redux: (
      <Provider store={store}>
        <Ducks pixelComponent={ReduxDuck} summaryComponent={ReduxSunk} />
      </Provider>
    ),
    recoil: (
      <RecoilRoot>
        <Ducks pixelComponent={RecoilDuck} summaryComponent={RecoilSunk} />
      </RecoilRoot>
    ),
    mobx: (
      <MobxProvider>
        <Ducks pixelComponent={MobxDuck} summaryComponent={MobxSunk} />
      </MobxProvider>
    ),
    context: (
      <ContextProvider>
        <Ducks pixelComponent={ContextDuck} summaryComponent={ContextSunk} />
      </ContextProvider>
    ),
  };

  return (
    <div className="App">
      <Title
        currentLibrary={currentLibrary}
        setCurrentLibrary={setCurrentLibrary}
      />
      <Controls
        currentLibrary={currentLibrary}
        setCurrentLibrary={setCurrentLibrary}
      />
      {librarySetups[currentLibrary]}
    </div>
  );
};

export default App;
