import { renderGame, executeAction } from '../../src/engine/logic';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Rotating with nothing in the way', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'bmoy', 0, [0, 0]),
    makeTetromino('trad_o', 'rrrr', 0, [2, 3]),
  ]);
  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '  rr ',
      '  rr ',
      'b    ',
      'moy  ',
      '     '
    ],
    'initial game is what we think it is'
  );

  const afterRotate = executeAction(game, {type: 'ROTATEACTION', dir: 'right', target: 'trad_j'});
  t.deepEqual(
    stringifyRender(renderGame(afterRotate), 5, 5),
    [
      '  rr ',
      '  rr ',
      ' mb  ',
      ' o   ',
      ' y   '
    ],
    'rotation was successful'
  );

  t.end();
});
