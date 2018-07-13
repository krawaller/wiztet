
import {Game, ShiftAction} from '../../../types';
import { renderTetromino } from '../render/render.tetromino';
import { outOfBounds } from '../helpers/detect.outofbounds';

export const shift = (game: Game, action: ShiftAction): Game => {
  const offset = {
    left: [-1, 0],
    right: [1, 0]
  }[action.dir];
  const tetr = game.tetrominoes[action.target];
  const shifted = renderTetromino({
    ...tetr,
    position: [tetr.position[0] + offset[0], tetr.position[1] + offset[1]]
  });
  if (!outOfBounds(shifted, game.height, game.width)) {
    return {
      ...game,
      tetrominoes: {
        ...game.tetrominoes,
        [tetr.id]: {
          ...tetr,
          position: [tetr.position[0] + offset[0], tetr.position[1] + offset[1] ]
        }
      }
    }
  }

  return game;
};