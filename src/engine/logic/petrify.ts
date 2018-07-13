
import {Game, PetrifyAction} from '../../../types';
import { renderTetromino } from './render.tetromino';
import { detectCollision } from './detect.collision';
import { outOfBounds } from './detect.outofbounds';
import { renderGround } from './render.ground';

export const petrify = (game: Game, action: PetrifyAction): Game => {
  let petrified;
  const steppedDown = Object.keys(game.tetrominoes).reduce((mem, tetrId) => {
    const tetr = game.tetrominoes[tetrId];
    return {
      ...mem,
      [tetrId]: renderTetromino({
        ...tetr,
        position: [tetr.position[0], tetr.position[1] - 1]
      })
    };
  }, {});
  do {
    const renderedGround = renderGround(game.ground);
    petrified = Object.keys(game.tetrominoes).filter(key =>
       outOfBounds(steppedDown[key], game.width, game.height) || detectCollision(steppedDown[key], renderedGround).length
    );
    game = {
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
  } while (petrified.length);
  return game;
};
