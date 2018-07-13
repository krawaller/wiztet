import { renderGame, executeAction } from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Chain shifting when blocked', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'mmmm', 0, [1, -1]),
    makeTetromino('trad_o', 'rrrr', 0, [3, 3]),
    makeTetromino('trad_i', 'bbbb', 1, [0, 1])
  ]);
  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '  brr',
      '  brr',
      '  b  ',
      ' mb  ',
      ' mmm ',
    ],
    'initial game is what we think it is'
  );

  const afterShift = executeAction(game, {type: 'SHIFTACTION', dir: 'right', target: 'trad_i'});
  t.deepEqual(
    stringifyRender(renderGame(afterShift), 5, 5),
    [
      '  brr',
      '  brr',
      '  b  ',
      ' mb  ',
      ' mmm ',
    ],
    'shift was a noop'
  );

  t.end();
});
