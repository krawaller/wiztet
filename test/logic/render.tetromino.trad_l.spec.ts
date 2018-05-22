import {renderTetromino} from '../../src/engine/logic';
import {Tetromino} from '../../types';
import * as test from 'tape';
import {stringifyRender,makeTetromino} from '../helpers';

test('The renderTetromino function when called with a trad_l', t => {
  const tetr = makeTetromino('trad_l', 'bmoy', 0, [1,1]);

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 4, 4),
    [
      '   b',
      ' yom',
      '    ',
      '    '
    ],
    'frame 0 is correctly rendered'
  );

  tetr.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 4, 4),
    [
      '  y ',
      '  o ',
      '  mb',
      '    '
    ],
    'frame 1 is correctly rendered'
  );

  tetr.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 4, 4),
    [
      '    ',
      ' moy',
      ' b  ',
      '    '
    ],
    'frame 2 is correctly rendered'
  );

  tetr.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 4, 4),
    [
      ' bm ',
      '  o ',
      '  y ',
      '    '
    ],
    'frame 3 is correctly rendered'
  );

  t.end();
});
