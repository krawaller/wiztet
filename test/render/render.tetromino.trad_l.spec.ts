import {renderGame} from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeGame, makeTetromino} from '../helpers';

test('The trad_l frames', t => {

  let game = makeGame([makeTetromino('trad_l', 'bmoy', 0, [1,1])]);

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '   b',
      ' yom',
      '    ',
      '    '
    ],
    'frame 0 is correctly rendered'
  );

  game.tetrominoes.trad_l.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '  y ',
      '  o ',
      '  mb',
      '    '
    ],
    'frame 1 is correctly rendered'
  );

  game.tetrominoes.trad_l.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '    ',
      ' moy',
      ' b  ',
      '    '
    ],
    'frame 2 is correctly rendered'
  );

  game.tetrominoes.trad_l.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
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
