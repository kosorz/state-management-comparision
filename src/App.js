import React, { useState } from 'react';

import Title from './components/Shared/Title';
import Controls from './components/Shared/Controls';
import Pixels from './components/Shared/Pixels';

import { RecoilRoot } from 'recoil';
import RecoilPixel from './components/Recoil/RecoilPixel';
import RecoilSummary from './components/Recoil/RecoilSummary';

import { Provider } from 'react-redux';
import ReduxPixel from './components/Redux/ReduxPixel';
import ReduxSummary from './components/Redux/ReduxSummary';
import store from './components/Redux/store';

import MobxProvider from './components/Mobx/mobx';
import MobxPixel from './components/Mobx/MobxPixel';
import MobxSummary from './components/Mobx/MobxSummary';

import './App.css';

const App = () => {
  const [currentLibrary, setCurrentLibrary] = useState('mobx');

  const librarySetups = {
    redux: (
      <Provider store={store}>
        <Pixels pixelComponent={ReduxPixel} summaryComponent={ReduxSummary} />
      </Provider>
    ),
    recoil: (
      <RecoilRoot>
        <Pixels pixelComponent={RecoilPixel} summaryComponent={RecoilSummary} />
      </RecoilRoot>
    ),
    mobx: (
      <MobxProvider>
        <Pixels pixelComponent={MobxPixel} summaryComponent={MobxSummary} />
      </MobxProvider>
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
