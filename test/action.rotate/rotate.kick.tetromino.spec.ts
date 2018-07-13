import { renderGame, executeAction } from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Rotating with kick against other tetromino', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'bmoy', 0, [0, 0]),
    makeTetromino('trad_o', 'rrrr', 0, [2, 2]),
  ], 5, 5);
  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '     ',
      '  rr ',
      'b rr ',
      'moy  ',
      '     '
    ],
    'initial game is what we think it is'
  );

  const afterRotate = executeAction(game, {type: 'ROTATEACTION', dir: 'right', target: 'trad_j'});
  t.deepEqual(
    stringifyRender(renderGame(afterRotate), 5, 5),
    [
      '     ',
      '  rr ',
      'mbrr ',
      'o    ',
      'y    '
    ],
    'we rotated with a kick to the left'
  );

  t.end();
});
