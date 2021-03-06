import {renderGame} from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('The trad_i frames', t => {

  let game = makeGame([makeTetromino('trad_i', 'bmoy', 0, [1,1])])

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '     ',
      ' bmoy',
      '     ',
      '     ',
      '     '
    ],
    'frame 0 is correctly rendered'
  );

  game.tetrominoes.trad_i.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '   b ',
      '   m ',
      '   o ',
      '   y ',
      '     '
    ],
    'frame 1 is correctly rendered'
  );

  game.tetrominoes.trad_i.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '     ',
      '     ',
      ' yomb',
      '     ',
      '     '
    ],
    'frame 2 is correctly rendered'
  );

  game.tetrominoes.trad_i.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
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
