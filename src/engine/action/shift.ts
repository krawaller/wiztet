
import {Game, ShiftAction, Position} from '../../../types';
import { renderTetromino } from '../render/render.tetromino';
import { outOfBounds } from '../helpers/detect.outofbounds';
import { renderGame } from '../render/render.game';
import { findCollisions } from '../helpers/find.collisions';

export const shift = (game: Game, action: ShiftAction): Game => {
  const offset = {
    left: [-1, 0],
    right: [1, 0]
  }[action.dir];
  let alteredGame = {...game};
  let toShift = [action.target];
  let failed = false;
  do {
    const tetr = game.tetrominoes[toShift.shift()];
    const shifted = {
      ...tetr,
      position: [tetr.position[0] + offset[0], tetr.position[1] + offset[1]] as Position
    };
    alteredGame = {
      ...alteredGame,
      tetrominoes: {
        ...alteredGame.tetrominoes,
        [shifted.id]: shifted
      }
    };
    const renderedGame = renderGame(alteredGame, shifted.id);
    const renderedShift = renderTetromino(shifted);
    if (outOfBounds(renderedShift, game.width, game.height)) {
      failed = true;
    } else {
      findCollisions( renderedShift, renderedGame ).forEach(pos => {
        const block = renderedGame[pos];
        if (block.from === 'ground') {
          failed = true;
        } else if (block.from === 'tetromino' && toShift.indexOf(block.tetrominoId) === -1) {
          toShift.push(block.tetrominoId);
        }
      });
    }
  } while (!failed && toShift.length);
  return failed ? game : alteredGame;
};
