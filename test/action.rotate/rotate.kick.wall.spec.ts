import { renderGame, executeAction } from '../../src/engine/logic';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Rotating with kick against wall', t => {
  const game = makeGame(
    [makeTetromino('trad_j', 'bmoy', 1, [-1, 0])],
    4, 4
  );
  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '    ',
      'mb  ',
      'o   ',
      'y   '
    ],
    'initial game is what we think it is'
  );

  const afterRotate = executeAction(game, {type: 'ROTATEACTION', dir: 'right', target: 'trad_j'});
  t.deepEqual(
    stringifyRender(renderGame(afterRotate), 4, 4),
    [
      '    ',
      '    ',
      'yom ',
      '  b '
    ],
    'we rotated with a kick to the right'
  );

  t.end();
});

