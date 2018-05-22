import {renderTetromino} from '../../src/engine/logic';
import {Tetromino} from '../../types';
import * as test from 'tape';
import {stringifyRender,makeTetromino} from '../helpers';

test('The renderTetromino function when called with a trad_z', t => {
  const tetr = makeTetromino('trad_z', 'bmoy', 0, [2,0]);

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 5, 3),
    [
      '  bm ',
      '   oy',
      '     '
    ],
    'frame 0 is correctly infoed'
  );

  tetr.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 5, 3),
    [
      '    b',
      '   om',
      '   y '
    ],
    'frame 1 is correctly infoed'
  );

  tetr.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 5, 3),
    [
      '     ',
      '  yo ',
      '   mb'
    ],
    'frame 2 is correctly infoed'
  );

  tetr.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 5, 3),
    [
      '   y ',
      '  mo ',
      '  b  '
    ],
    'frame 3 is correctly infoed'
  );

  t.end();
});
