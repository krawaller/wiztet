import { renderGame, executeAction } from '../../src/engine';
import * as test from 'tape';
import {stringifyRender, makeTetromino, makeGame} from '../helpers';

test('Rotating with kick against ground', t => {
  const game = makeGame([
    makeTetromino('trad_l', 'bmoy', 2, [0, 0]),
  ], 4, 4);

  game.ground = {'2_0': {type: 'block', colour: 'grey'}};

  t.deepEqual(
    stringifyRender(renderGame(game), 4, 4),
    [
      '    ',
      '    ',
      'moy ',
      'b G '
    ],
    'initial game is what we think it is'
  );

  const afterRotate = executeAction(game, {type: 'ROTATEACTION', dir: 'left', target: 'trad_l'});
  t.deepEqual(
    stringifyRender(renderGame(afterRotate), 4, 4),
    [
      '    ',
      'y   ',
      'o   ',
      'mbG '
    ],
    'we rotated with a kick to the left'
  );

  t.end();
});
