import { renderGame, executeAction, renderTetromino } from '../../src/engine/logic';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Cannot shift out of bounds right', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'mmmm', 0, [0, -1]),
    makeTetromino('trad_o', 'rrrr', 0, [3, 3]),
  ], 5, 5);
  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '   rr',
      '   rr',
      '     ',
      'm    ',
      'mmm  ',
    ],
    'initial game is what we think it is'
  );
  const afterShift = executeAction(game, {type: 'SHIFTACTION', dir: 'right', target: 'trad_o'});
  t.deepEqual(
    stringifyRender(renderGame(afterShift), 5, 5),
    [
      '   rr',
      '   rr',
      '     ',
      'm    ',
      'mmm  ',
    ],
    'shift was ignored'
  );

  t.end();
});
