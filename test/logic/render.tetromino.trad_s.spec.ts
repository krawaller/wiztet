import {renderTetromino} from '../../src/engine/logic';
import {Tetromino} from '../../types';
import * as test from 'tape';
import {stringifyRender,makeTetromino} from '../helpers';

test('The renderTetromino function when called with a trad_s', t => {
  const tetr = makeTetromino('trad_s', 'bmoy', 0, [1,1]);

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 0}), 4, 4),
    [
      '  oy',
      ' bm ',
      '    ',
      '    '
    ],
    'frame 0 is correctly infoed'
  );

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 1}), 4, 4),
    [
      '  b ',
      '  mo',
      '   y',
      '    '
    ],
    'frame 1 is correctly infoed'
  );

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 2}), 4, 4),
    [
      '    ',
      '  mb',
      ' yo ',
      '    '
    ],
    'frame 2 is correctly infoed'
  );

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 3}), 4, 4),
    [
      ' y  ',
      ' om ',
      '  b ',
      '    '
    ],
    'frame 3 is correctly infoed'
  );

  t.end();
});
