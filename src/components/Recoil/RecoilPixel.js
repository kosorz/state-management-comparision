import React, { forwardRef } from 'react';
import { useRecoilState } from 'recoil';
import { pixelStateFamily } from './atoms';

const PixelItem = forwardRef(({ id }, ref) => {
  const [pixel, setPixelState] = useRecoilState(pixelStateFamily(id));

  return pixel.visible ? (
    <div
      ref={ref}
      onClick={() => setPixelState({ visible: false })}
      className="Pixel"
    />
  ) : null;
});

export default React.memo(PixelItem);
