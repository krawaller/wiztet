import {renderTetromino} from '../../src/engine/logic';
import {Tetromino} from '../../types';
import * as test from 'tape';
import {stringifyRender,makeTetromino} from '../helpers';

test('The renderTetromino function when called with a trad_t', t => {
  const tetr = makeTetromino('trad_t', 'bmoy', 0, [0,2]);

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 3, 5),
    [
      ' b ',
      'yom',
      '   ',
      '   ',
      '   '
    ],
    'frame 0 is correctly infoed'
  );

  tetr.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 3, 5),
    [
      ' y ',
      ' ob',
      ' m ',
      '   ',
      '   '
    ],
    'frame 1 is correctly infoed'
  );

  tetr.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 3, 5),
    [
      '   ',
      'moy',
      ' b ',
      '   ',
      '   '
    ],
    'frame 2 is correctly infoed'
  );

  tetr.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderTetromino(tetr), 3, 5),
    [
      ' m ',
      'bo ',
      ' y ',
      '   ',
      '   '
    ],
    'frame 3 is correctly infoed'
  );

  t.end();
});
