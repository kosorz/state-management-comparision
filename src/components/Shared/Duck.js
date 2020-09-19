import React, { forwardRef } from 'react';
import cn from 'classnames';

const Duck = forwardRef(({ onClick, visible, className }, ref) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        'Duck',
        visible ? 'DuckVisible' : 'DuckInvisible',
        className
      )}
    />
  );
});

export default Duck;
