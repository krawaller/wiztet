import { renderGame, executeAction } from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Chain shifting to the left', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'mmmm', 0, [1, -1]),
    makeTetromino('trad_o', 'rrrr', 0, [3, 3]),
    makeTetromino('trad_i', 'bbbb', 1, [0, 1]),
    makeTetromino('trad_s', 'oooo', 1, [2, 0])
  ]);
  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '  brr',
      '  brr',
      '  bo ',
      ' mboo',
      ' mmmo',
    ],
    'initial game is what we think it is'
  );

  const afterShift = executeAction(game, {type: 'SHIFTACTION', dir: 'left', target: 'trad_o'});
  t.deepEqual(
    stringifyRender(renderGame(afterShift), 5, 5),
    [
      ' brr ',
      ' brr ',
      ' b o ',
      'mb oo',
      'mmm o'
    ],
    'shift was successful'
  );

  t.end();
});
