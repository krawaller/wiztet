import { renderGame, executeAction } from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Gravity is prevented by touching ground', t => {
  const game = makeGame([
    makeTetromino('trad_j', 'mmmm', 0, [0, 0]),
    makeTetromino('trad_o', 'rrrr', 0, [2, 3]),
  ], 5, 5);

  game.ground = {'1_0': {type: 'block', colour: 'grey'}};

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      '  rr ',
      '  rr ',
      'm    ',
      'mmm  ',
      ' G   ',
    ],
    'initial game is what we think it is'
  );

  const afterShift = executeAction(game, {type: 'GRAVITYACTION'});
  t.deepEqual(
    stringifyRender(renderGame(afterShift), 5, 5),
    [
      '     ',
      '  rr ',
      'm rr ',
      'mmm  ',
      ' G   ',
    ],
    'tetromino was kept up by ground'
  );

  t.end();
});
