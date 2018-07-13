
import {Game, Action} from '../../../types';
import { rotateTetromino } from './rotate';
import { petrify } from './petrify';
import { shift } from './shift';

export const executeAction = (game: Game, action: Action): Game => {
  switch(action.type) {
    case 'ROTATEACTION': return rotateTetromino(game, action);
    case 'PETRIFYACTION': return petrify(game, action);
    case 'SHIFTACTION': return shift(game, action);
    default: return game;
  }
};
