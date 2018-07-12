
import {Game, Rendering, Action} from '../../../types';
import { rotateTetromino } from '.';
import { petrify } from './petrify';

export const executeAction = (game: Game, action: Action): Game => {
  switch(action.type) {
    case 'ROTATEACTION': return rotateTetromino(game, action);
    case 'PETRIFYACTION': return petrify(game, action);
    default: return game;
  }
};
