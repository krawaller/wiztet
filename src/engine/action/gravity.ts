
import {Game, GravityAction} from '../../../types';
import { renderTetromino } from '../render/render.tetromino';
import { outOfBounds } from '../helpers/detect.outofbounds';
import { renderGame } from '../render/render.game';
import { findCollisions } from '../helpers/find.collisions';

export const gravity = (game: Game, action: GravityAction): Game => {
  const toTest = Object.keys(game.tetrominoes);
  const cannotMove = {};
  const canMove = {};
  const steppedDown = toTest.reduce((mem, tetrId) => {
    const tetr = game.tetrominoes[tetrId];
    return {
      ...mem,
      [tetrId]: {
        ...tetr,
        position: [tetr.position[0], tetr.position[1] - 1]
      }
    };
  }, {});
  const renderedSteppedDown = toTest.reduce((mem, tetrId) => ({
    ...mem,
    [tetrId]: renderTetromino(steppedDown[tetrId])
  }), {});
  const gameRender = renderGame(game);
  while (toTest.length) {
    const currId = toTest.shift();
    let result: 'undetermined' | 'cannotMove' | 'wait' = 'undetermined';
    if (outOfBounds(renderedSteppedDown[currId], game.width, game.height)) {
      result = 'cannotMove';
    } else {
      for(const pos of findCollisions(renderedSteppedDown[currId], gameRender)) {
        const coll = gameRender[pos];
        if (coll.from === 'ground' || (coll.from === 'tetromino' && cannotMove[coll.tetrominoId]) ) {
          result = 'cannotMove';
          break;
        } else if (coll.from === 'tetromino' && coll.tetrominoId !== currId && !canMove[coll.tetrominoId]) {
          result = 'wait';
        }
      }
    }
    if (result === 'cannotMove') {
      cannotMove[currId] = true;
    } else if (result === 'wait') {
      toTest.push(currId);
    } else {
      canMove[currId] = true;
    }
  }
  return {
    ...game,
    tetrominoes: Object.keys(game.tetrominoes).reduce((mem, tetrId) => ({
      ...mem,
      [tetrId]: canMove[tetrId] ? steppedDown[tetrId] : game.tetrominoes[tetrId]
     }), {})
  };
};
