import {renderGame} from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeGame, makeTetromino} from '../helpers';

test('The trad_j frames', t => {

  let game = makeGame([makeTetromino('trad_j', 'bmoy', 0, [1,1])]);

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      ' b  ',
      ' moy',
      '    ',
      '    '
    ],
    'frame 0 is correctly rendered'
  );

  game.tetrominoes.trad_j.frameNumber = 1;

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '  mb',
      '  o ',
      '  y ',
      '    '
    ],
    'frame 1 is correctly rendered'
  );

  game.tetrominoes.trad_j.frameNumber = 2;

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '    ',
      ' yom',
      '   b',
      '    '
    ],
    'frame 2 is correctly rendered'
  );

  game.tetrominoes.trad_j.frameNumber = 3;

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '  y ',
      '  o ',
      ' bm ',
      '    '
    ],
    'frame 3 is correctly rendered'
  );

  t.end();
});
