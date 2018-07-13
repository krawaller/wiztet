import {renderGame} from '../../src/engine';
import * as test from 'tape';
import {stringifyRender,makeTetromino,makeGame} from '../helpers';

test('The trad_s frames', t => {

  let game = makeGame([makeTetromino('trad_s', 'bmoy', 0, [1,1])]);

  const tetr = makeTetromino('trad_s', 'bmoy', 0, [1,1]);

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '  oy',
      ' bm ',
      '    ',
      '    '
    ],
    'frame 0 is correctly infoed'
  );

  game.tetrominoes.trad_s.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '  b ',
      '  mo',
      '   y',
      '    '
    ],
    'frame 1 is correctly infoed'
  );

  game.tetrominoes.trad_s.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '    ',
      '  mb',
      ' yo ',
      '    '
    ],
    'frame 2 is correctly infoed'
  );

  game.tetrominoes.trad_s.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
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
