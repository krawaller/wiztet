import {renderGame} from '../../src/engine';
import * as test from 'tape';
import {stringifyRender,makeTetromino,makeGame} from '../helpers';

test('The trad_t frames', t => {

  let game = makeGame([makeTetromino('trad_t', 'bmoy', 0, [0,2])]);

  t.deepEqual(
    stringifyRender(renderGame(game), 3, 5),
    [
      ' b ',
      'yom',
      '   ',
      '   ',
      '   '
    ],
    'frame 0 is correctly infoed'
  );

  game.tetrominoes.trad_t.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderGame(game), 3, 5),
    [
      ' y ',
      ' ob',
      ' m ',
      '   ',
      '   '
    ],
    'frame 1 is correctly infoed'
  );

  game.tetrominoes.trad_t.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderGame(game), 3, 5),
    [
      '   ',
      'moy',
      ' b ',
      '   ',
      '   '
    ],
    'frame 2 is correctly infoed'
  );

  game.tetrominoes.trad_t.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderGame(game), 3, 5),
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
