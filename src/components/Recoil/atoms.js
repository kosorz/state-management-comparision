import { atom, atomFamily } from 'recoil';
import randomObject from '../../util/randomObject';

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const nestedObjectState = atom({
  key: 'nestedObjectState',
  default: { changes: 0, value: randomObject() },
});

export const pixelStateFamily = atomFamily({
  key: 'pixelsStateFamily',
  default: { visible: true },
});
