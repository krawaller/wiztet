import {renderTetromino} from '../../src/engine/logic';
import {Tetromino} from '../../types';
import * as test from 'tape';
import {stringifyRender,makeTetromino} from '../helpers';

test('The renderTetromino function when called with a trad_o', t => {
  const tetr = makeTetromino('trad_o', 'bmoy', 0, [1,1]);

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 3, 3),
    [
      ' bm',
      ' yo',
      '   ',
    ],
    'frame 0 is correctly infoed'
  );

  tetr.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 3, 3),
    [
      ' yb',
      ' om',
      '   ',
    ],
    'frame 1 is correctly infoed'
  );

  tetr.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 3, 3),
    [
      ' oy',
      ' mb',
      '   ',
    ],
    'frame 2 is correctly infoed'
  );

  tetr.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 3, 3),
    [
      ' mo',
      ' by',
      '   ',
    ],
    'frame 3 is correctly infoed'
  );

  t.end();
});
