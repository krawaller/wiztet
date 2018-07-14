import { renderGame, executeAction } from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Gravity moves pieces downwards', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'mmmm', 0, [0, 0]),
    makeTetromino('trad_o', 'rrrr', 0, [2, 3]),
  ], 5, 5);
  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '  rr ',
      '  rr ',
      'm    ',
      'mmm  ',
      '     ',
    ],
    'initial game is what we think it is'
  );

  const afterShift = executeAction(game, {type: 'GRAVITYACTION'});
  t.deepEqual(
    stringifyRender(renderGame(afterShift), 5, 5),
    [
      '     ',
      '  rr ',
      '  rr ',
      'm    ',
      'mmm  ',
    ],
    'tetrominoes have slid downwards'
  );

  t.end();
});
