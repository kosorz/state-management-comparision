import React from 'react';

import Duck from './Duck';

const Sunk = ({ sunk }) => {
  return (
    <div className={'Sunk'}>
      Sunk: {sunk}{' '}
      <Duck
        className={'DuckDecoration'}
        ref={undefined}
        onClick={() => {}}
        visible={false}
      />
    </div>
  );
};

export default Sunk;
