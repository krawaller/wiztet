
import {Game, RotateAction} from '../../../types';
import { renderGame } from './render.game';
import { tetrominoes } from '../data';
import { renderTetromino } from './render.tetromino';
import { findCollisions } from './find.collisions';
import { outOfBounds } from './detect.outofbounds';

export const rotateTetromino = (game: Game, action: RotateAction): Game => {
  const tetromino = game.tetrominoes[action.target];
  const rest = renderGame(game, action.target);
  const targetFrame = tetrominoes[tetromino.type].frames[tetromino.frameNumber][action.dir];

  const offset = targetFrame.kicks.find( offset => {
    const maybe = renderTetromino({
      ...tetromino,
      frameNumber: targetFrame.targetFrame,
      position: [tetromino.position[0] + offset[0], tetromino.position[1] + offset[1] ]
    });
    return !outOfBounds(maybe, game.height, game.width) && !Object.keys( findCollisions(maybe, rest) ).length; // TODO - collision type! :D
  });

  if (offset) {
    return {
      ...game,
      tetrominoes: {
        ...game.tetrominoes,
        [tetromino.id]: {
          ...tetromino,
          frameNumber: targetFrame.targetFrame,
          position: [tetromino.position[0] + offset[0], tetromino.position[1] + offset[1] ]
        }
      }
    }
  }
  
  return game;
};
