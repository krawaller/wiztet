import {Rendering} from '../../../types';

export const detectCollision = (rnd1: Rendering, rnd2: Rendering): string[] => {
    return Object.keys(rnd1).filter(key => rnd2[key]);
}
