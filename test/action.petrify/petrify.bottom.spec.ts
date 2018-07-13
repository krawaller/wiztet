
import * as test from 'tape';

import {stringifyRender, makeTetromino, makeGame} from '../helpers';
import { renderGame, executeAction } from '../../src/engine/logic';

test('petrify pieces touching the bottom', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'bbbb', 1, [-1, 0]),
    makeTetromino('trad_o', 'rrrr', 0, [3, 1]),
    makeTetromino('trad_i', 'yyyy', 0, [0, 2]),
  ], 5, 5);

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      'yyyy ',
      '     ',
      'bb rr',
      'b  rr',
      'b    '
    ],
    'initial game is what we think it is'
  );

  const afterPetrify = executeAction(game, {type: 'PETRIFYACTION'});
  t.deepEqual(
    stringifyRender(renderGame(afterPetrify), 5, 5),
    [
      'yyyy ',
      '     ',
      'GG rr',
      'G  rr',
      'G    '
    ],
    'petrified when touch bottom'
  );

  t.end();
});
