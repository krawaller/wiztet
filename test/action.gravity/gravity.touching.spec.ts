import { renderGame, executeAction } from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Gravity moves pieces downwards even when touching', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'mmmm', 0, [0, 1]),
    makeTetromino('trad_o', 'rrrr', 0, [2, 3]),
    makeTetromino('trad_i', 'yyyy', 0, [1, -1]),
  ], 5, 5);
  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '  rr ',
      'm rr ',
      'mmm  ',
      ' yyyy',
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
      'm rr ',
      'mmm  ',
      ' yyyy'
    ],
    'touching tetrominoes have all slid downwards'
  );

  t.end();
});
