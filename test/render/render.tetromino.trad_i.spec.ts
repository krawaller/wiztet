import {renderTetromino} from '../../src/engine/logic';
import {Tetromino} from '../../types';
import * as test from 'tape';
import {stringifyRender,makeTetromino} from '../helpers';

test('The renderTetromino function when called with a trad_i', t => {
  const tetr = makeTetromino('trad_i', 'bmoy', 0, [1,1]);

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 0}), 5, 5),
    [
      '     ',
      ' bmoy',
      '     ',
      '     ',
      '     '
    ],
    'frame 0 is correctly rendered'
  );

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 1}), 5, 5),
    [
      '   b ',
      '   m ',
      '   o ',
      '   y ',
      '     '
    ],
    'frame 1 is correctly rendered'
  );

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 2}), 5, 5),
    [
      '     ',
      '     ',
      ' yomb',
      '     ',
      '     '
    ],
    'frame 2 is correctly rendered'
  );

  t.deepEqual(
    stringifyRender(renderTetromino({...tetr, frameNumber: 3}), 5, 5),
    [
      '  y  ',
      '  o  ',
      '  m  ',
      '  b  ',
      '     '
    ],
    'frame 3 is correctly rendered'
  );

  t.end();
});
