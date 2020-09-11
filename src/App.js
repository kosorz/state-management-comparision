import React, { useRef, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';

import store from './components/Redux/store';
import Redux from './components/Redux/Redux';
import Recoil from './components/Recoil/Recoil';
import Controls from './components/Control/Control';

import './App.css';

function App() {
  const [requestedUpdates, setRequestedUpdates] = useState(100);

  const reduxAddingBlockingRef = useRef();
  const reduxObjectSettingBlockingRef = useRef();

  const recoilAddingBlockingRef = useRef();
  const recoilObjectSettingBlockingRef = useRef();

  const reduxRefs = useRef([
    reduxAddingBlockingRef,
    reduxObjectSettingBlockingRef,
  ]);

  const recoilRefs = useRef([
    recoilAddingBlockingRef,
    recoilObjectSettingBlockingRef,
  ]);

  const combinedRefs = useRef({
    addingBlockingRefs: [recoilAddingBlockingRef, reduxAddingBlockingRef],
    objectSettingBlockingRefs: [
      recoilObjectSettingBlockingRef,
      reduxObjectSettingBlockingRef,
    ],
  });

  return (
    <div className="App">
      <Provider store={store}>
        <Redux requestedUpdates={requestedUpdates} ref={reduxRefs} />
      </Provider>
      <RecoilRoot>
        <Recoil requestedUpdates={requestedUpdates} ref={recoilRefs} />
      </RecoilRoot>
      <Controls
        requestedUpdates={requestedUpdates}
        setRequestedUpdates={setRequestedUpdates}
        ref={combinedRefs}
      />
    </div>
  );
}

export default App;
