import {renderGame} from '../../src/engine';
import * as test from 'tape';
import {stringifyRender,makeTetromino,makeGame} from '../helpers';

test('The trad_z frames', t => {

  let game = makeGame([makeTetromino('trad_z', 'bmoy', 0, [2,0])]);

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 3),
    [
      '  bm ',
      '   oy',
      '     '
    ],
    'frame 0 is correctly infoed'
  );

  game.tetrominoes.trad_z.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 3),
    [
      '    b',
      '   om',
      '   y '
    ],
    'frame 1 is correctly infoed'
  );

  game.tetrominoes.trad_z.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 3),
    [
      '     ',
      '  yo ',
      '   mb'
    ],
    'frame 2 is correctly infoed'
  );

  game.tetrominoes.trad_z.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 3),
    [
      '   y ',
      '  mo ',
      '  b  '
    ],
    'frame 3 is correctly infoed'
  );

  t.end();
});
