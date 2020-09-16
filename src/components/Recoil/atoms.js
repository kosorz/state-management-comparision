import { atomFamily, atom } from 'recoil';

export const pixelFamily = atomFamily({
  key: 'pixelFamily',
  default: { visible: true },
});

export const pixelsSummary = atom({
  key: 'pixelsSummary',
  default: 0,
});
