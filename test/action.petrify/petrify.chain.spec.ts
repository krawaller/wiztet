
import * as test from 'tape';

import {stringifyRender, makeTetromino, makeGame} from '../helpers';
import { renderGame, executeAction } from '../../src/engine';

test('Chain petrification', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'bbbb', 1, [-1, 0]),
    makeTetromino('trad_o', 'rrrr', 0, [3, 1]),
    makeTetromino('trad_i', 'yyyy', 0, [0, 1]),
    makeTetromino('trad_z', 'mmmm', 0, [3, 2]),
  ], 5, 5);

  t.deepEqual(
    stringifyRender(renderGame(game), 6, 5),
    [
      '   mm ',
      'yyyymm',
      'bb rr ',
      'b  rr ',
      'b     '
    ],
    'initial game is what we think it is'
  );

  const afterPetrify = executeAction(game, {type: 'PETRIFYACTION'});
  t.deepEqual(
    stringifyRender(renderGame(afterPetrify), 6, 5),
    [
      '   GG ',
      'GGGGGG',
      'GG rr ',
      'G  rr ',
      'G     '
    ],
    'vertical adjacency petrifies'
  );

  t.end();
});
