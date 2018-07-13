import { renderGame, executeAction } from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Cannot shift out of bounds left', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'mmmm', 0, [0, -1]),
    makeTetromino('trad_o', 'rrrr', 0, [2, 3]),
  ], 5, 5);
  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '  rr ',
      '  rr ',
      '     ',
      'm    ',
      'mmm  ',
    ],
    'initial game is what we think it is'
  );

  const afterShift = executeAction(game, {type: 'SHIFTACTION', dir: 'left', target: 'trad_j'});
  t.deepEqual(
    stringifyRender(renderGame(afterShift), 5, 5),
    [
      '  rr ',
      '  rr ',
      '     ',
      'm    ',
      'mmm  ',
    ],
    'shift was ignored'
  );

  t.end();
});
