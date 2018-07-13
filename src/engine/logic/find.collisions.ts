import {Rendering, PositionString} from '../../../types';
/*
Take two renderings and return a list of all blocks that have the same position
*/
export const findCollisions = (rnd1: Rendering, rnd2: Rendering): PositionString[] => {
    return Object.keys(rnd1).filter(key => rnd2[key]);
}
