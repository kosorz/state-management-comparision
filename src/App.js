import React, { useState } from 'react';

import Pixels from './components/Shared/Pixels';
import Button from './components/Shared/Button';

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
  const [currentSetup, setCurrentSetup] = useState('mobx');

  const components = {
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
      <div className="Controls">
        <Button
          handleClick={() => setCurrentSetup('redux')}
          label={'Redux'}
          active={currentSetup === 'redux'}
        />
        <Button
          handleClick={() => setCurrentSetup('recoil')}
          label={'Recoil'}
          active={currentSetup === 'recoil'}
        />
        <Button
          handleClick={() => setCurrentSetup('mobx')}
          label={'Mobx'}
          active={currentSetup === 'mobx'}
        />
      </div>
      {components[currentSetup]}
    </div>
  );
};

export default App;
