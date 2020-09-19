import React from 'react';
import cn from 'classnames';

const Title = ({ currentLibrary, setCurrentLibrary }) => {
  return (
    <>
      <h1>
        <span
          onClick={() => setCurrentLibrary('redux')}
          className={cn(currentLibrary === 'redux' && 'Decoration', 'Click')}
        >
          DUX
        </span>
        <span
          onClick={() => setCurrentLibrary('recoil')}
          className={cn(currentLibrary === 'recoil' && 'Decoration', 'Click')}
        >
          COIL
        </span>
        <span
          onClick={() => setCurrentLibrary('mobx')}
          className={cn(currentLibrary === 'mobx' && 'Decoration', 'Click')}
        >
          X
        </span>
      </h1>
      <hr />
    </>
  );
};

export default Title;
