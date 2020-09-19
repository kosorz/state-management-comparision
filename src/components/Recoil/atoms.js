import { atomFamily, atom } from 'recoil';

export const duckFamily = atomFamily({
  key: 'duckFamily',
  default: { visible: true },
});

export const ducksSunk = atom({
  key: 'ducksSunk',
  default: 0,
});
