import { executeAction } from '../../src/engine';
import * as test from 'tape';
import {makeGame} from '../helpers';

test('Petrify doesnt throw when no tetrominoes', t => {
  t.doesNotThrow(() => executeAction(makeGame([]), {type: 'PETRIFYACTION'}));

  t.end();
});
