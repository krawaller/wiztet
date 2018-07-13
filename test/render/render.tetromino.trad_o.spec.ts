import {renderGame} from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('The trad_o frames', t => {

  let game = makeGame([makeTetromino('trad_o', 'bmoy', 0, [1,1])]);

  t.deepEqual(
    stringifyRender(renderGame(game), 3, 3),
    [
      ' bm',
      ' yo',
      '   ',
    ],
    'frame 0 is correctly infoed'
  );

  game.tetrominoes.trad_o.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderGame(game), 3, 3),
    [
      ' yb',
      ' om',
      '   ',
    ],
    'frame 1 is correctly infoed'
  );

  game.tetrominoes.trad_o.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderGame(game), 3, 3),
    [
      ' oy',
      ' mb',
      '   ',
    ],
    'frame 2 is correctly infoed'
  );

  game.tetrominoes.trad_o.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderGame(game), 3, 3),
    [
      ' mo',
      ' by',
      '   ',
    ],
    'frame 3 is correctly infoed'
  );

  t.end();
});
