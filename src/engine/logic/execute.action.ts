
import {Game, Rendering, Action} from '../../../types';
import { rotateTetromino } from './';

export const executeAction = (game: Game, action: Action): Game => {
  switch(action.type) {
    case 'ROTATEACTION': return rotateTetromino(game, action);
    default: return game;
  }
};
