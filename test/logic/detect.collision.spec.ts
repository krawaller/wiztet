import {detectCollision, renderTetromino} from '../../src/engine/logic';
import {Tetromino} from '../../types';
import * as test from 'tape';
import {stringifyRender, makeTetromino} from '../helpers';

test('The detectCollision function', t => {
  const tetr1 = renderTetromino(makeTetromino('trad_j', 'bbbb', 0, [0, 0]));
  t.deepEqual(
    stringifyRender(tetr1, 4, 4),
    [
      '    ',
      'b   ',
      'bbb ',
      '    ',
    ],
    'tetr1 is what we think it is'
  );

  const tetr2 = renderTetromino(makeTetromino('trad_o', 'oooo', 0, [1,2]));
  t.deepEqual(
    stringifyRender(tetr2, 4, 4),
    [
      ' oo ',
      ' oo ',
      '    ',
      '    ',
    ],
    'tetr2 is what we think it is'
  );

  const tetr3 = renderTetromino(makeTetromino('trad_i', 'mmmm', 1, [0,0]));
  t.deepEqual(
    stringifyRender(tetr3, 4, 4),
    [
      '  m ',
      '  m ',
      '  m ',
      '  m ',
    ],
    'tetr3 is what we think it is'
  );

  t.deepEqual(
    detectCollision(tetr1, tetr2),
    [],
    'tetr1 and tetr2 does not collide'
  );

  t.deepEqual(
    detectCollision(tetr1, tetr3),
    ['2_1'],
    'collisions betwween tetr1 and tetr3 are found'
  );

  t.deepEqual(
    detectCollision(tetr2, tetr3).sort(),
    ['2_2', '2_3'],
    'collisions betwween tetr2 and tetr3 are found'
  );

  t.end();
});
