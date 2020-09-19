import React from 'react';
import Button from './Button';

const Controls = ({ currentLibrary, setCurrentLibrary }) => {
  return (
    <div className="Controls">
      <Button
        handleClick={() => setCurrentLibrary('redux')}
        label={'Redux'}
        active={currentLibrary === 'redux'}
      />
      <Button
        handleClick={() => setCurrentLibrary('recoil')}
        label={'Recoil'}
        active={currentLibrary === 'recoil'}
      />
      <Button
        handleClick={() => setCurrentLibrary('mobx')}
        label={'Mobx'}
        active={currentLibrary === 'mobx'}
      />
    </div>
  );
};

export default Controls;
