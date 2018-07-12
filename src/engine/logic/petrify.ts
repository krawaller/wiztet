
import {Game, PetrifyAction} from '../../../types';
import { renderTetromino } from './render.tetromino';
import { detectCollision } from './detect.collision';
import { outOfBounds } from './detect.outofbounds';
import { renderGround } from './render.ground';

export const petrify = (game: Game, action: PetrifyAction): Game => {
  const renderedGround = renderGround(game.ground);
  const petrified = Object.keys(game.tetrominoes).filter(key => {
    const tetr = game.tetrominoes[key];
    const stepDown = renderTetromino({
      ...tetr,
      position: [tetr.position[0], tetr.position[1] - 1]
    });
    return outOfBounds(stepDown, game.width, game.height) || detectCollision(stepDown, renderedGround).length;
  });
  return {
    ...game,
    tetrominoes: Object.keys(game.tetrominoes).reduce((mem, tetrId) => petrified.indexOf(tetrId) === -1 ? {
      ...mem,
      [tetrId]: game.tetrominoes[tetrId]
    } : mem, {}),
    ground: {
      ...game.ground,
      ...petrified.reduce(
        (mem, key) => Object.keys(renderTetromino(game.tetrominoes[key])).reduce(
          (innerMem, pos) => ({
            ...innerMem,
            [pos]: {type: 'block', colour: 'grey'}
          }),
          mem
        ),
        {}
      )
    }
  };
};
