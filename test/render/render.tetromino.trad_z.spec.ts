import {renderTetromino} from '../../src/engine/logic';
import {Tetromino} from '../../types';
import * as test from 'tape';
import {stringifyRender,makeTetromino} from '../helpers';

test('The renderTetromino function when called with a trad_z', t => {
  const tetr = makeTetromino('trad_z', 'bmoy', 0, [2,0]);

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 0}), 5, 3),
    [
      '  bm ',
      '   oy',
      '     '
    ],
    'frame 0 is correctly infoed'
  );

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 1}), 5, 3),
    [
      '    b',
      '   om',
      '   y '
    ],
    'frame 1 is correctly infoed'
  );

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 2}), 5, 3),
    [
      '     ',
      '  yo ',
      '   mb'
    ],
    'frame 2 is correctly infoed'
  );

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 3}), 5, 3),
    [
      '   y ',
      '  mo ',
      '  b  '
    ],
    'frame 3 is correctly infoed'
  );

  t.end();
});
