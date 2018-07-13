import {Rendering, Ground} from '../../../types';

export const renderGround = (ground: Ground = {}): Rendering => {
  const ret = Object.keys(ground).reduce((mem, key) => ({
    ...mem,
    [key]: {
      ...ground[key],
      position: key.split('_').map(i => parseInt(i)),
      from: 'ground'
    }
  }), {});
  return ret;
};
