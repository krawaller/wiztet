import { renderGame, executeAction } from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Gravity prevention is respected through chains', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'mmmm', 0, [0, 0]),
    makeTetromino('trad_o', 'rrrr', 0, [0, 3]),
    makeTetromino('trad_s', 'yyyy', 1, [2, 2]),
  ], 5, 5);

  game.ground = {'1_0': {type: 'block', colour: 'grey'}};

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      'rr y ',
      'rr yy',
      'm   y',
      'mmm  ',
      ' G   ',
    ],
    'initial game is what we think it is'
  );

  const afterShift = executeAction(game, {type: 'GRAVITYACTION'});
  t.deepEqual(
    stringifyRender(renderGame(afterShift), 5, 5),
    [
        'rr   ',
        'rr y ',
        'm  yy',
        'mmm y',
        ' G   ',
    ],
    'tetrominoes was kept up by bottom'
  );

  t.end();
});
