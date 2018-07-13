
import * as test from 'tape';

import {stringifyRender, makeTetromino, makeGame} from '../helpers';
import { renderGame, executeAction } from '../../src/engine';

test('petrifying pieces touching the ground', t => {
  const game = makeGame([
    makeTetromino('trad_o', 'rrrr', 0, [3, 1]),
    makeTetromino('trad_i', 'yyyy', 0, [0, 2]),
  ], 5, 5);

  game.ground = {'4_0': {type: 'block', colour: 'grey'}};

  t.deepEqual(
    stringifyRender(renderGame(game), 5, 5),
    [
      'yyyy ',
      '     ',
      '   rr',
      '   rr',
      '    G'
    ],
    'initial game is what we think it is'
  );

  const afterPetrify = executeAction(game, {type: 'PETRIFYACTION'});
  t.deepEqual(
    stringifyRender(renderGame(afterPetrify), 5, 5),
    [
      'yyyy ',
      '     ',
      '   GG',
      '   GG',
      '    G'
    ],
    'petrified when touch ground or zero'
  );

  t.end();
});
