import React, { forwardRef } from 'react';
import cn from 'classnames';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { pixelFamily, pixelsSummary } from './atoms';

const PixelItem = forwardRef(({ id }, ref) => {
  const [pixel, setPixelState] = useRecoilState(pixelFamily(id));
  const setPixelsSummary = useSetRecoilState(pixelsSummary);

  return (
    <div
      ref={ref}
      onClick={() => {
        setPixelsSummary((oldPixelSummary) => {
          return pixel.visible ? oldPixelSummary + 1 : oldPixelSummary - 1;
        });
        setPixelState((oldPixel) => {
          return { visible: !oldPixel.visible };
        });
      }}
      className={cn('Pixel', pixel.visible ? 'PixelVisible' : 'PixelInvisible')}
    />
  );
});

export default React.memo(PixelItem);
