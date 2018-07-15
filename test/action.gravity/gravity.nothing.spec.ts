import { executeAction } from '../../src/engine';
import * as test from 'tape';
import {makeGame} from '../helpers';

test('Gravity doesnt throw when no tetrominoes', t => {
  t.doesNotThrow(() => executeAction(makeGame([]), {type: 'GRAVITYACTION'}));

  t.end();
});
