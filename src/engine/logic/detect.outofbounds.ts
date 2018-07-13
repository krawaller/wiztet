import {Rendering, PositionString} from '../../../types';
/*

*/
export const outOfBounds = (rnd: Rendering, height: number, width: number): boolean => {
  // Position string: '2_5' (X_Y)
  // TODO - filter out Nothing
  return !!Object.keys(rnd).find(pos => {
    const [x, y] = pos.split('_').map(i => +i);
    return x < 0 || x >= width || y < 0 || y >= height;
  });
}
