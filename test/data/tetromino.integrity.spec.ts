import {tetrominoes} from '../../src/engine/data';
import {TetrominoTypeName} from '../../types';
import * as test from 'tape';

Object.keys(tetrominoes).forEach((key: TetrominoTypeName) => {
  const tetromino = tetrominoes[key];
  test(`integrity of tetromino ${key}`, t => {
    tetromino.frames.forEach((frame, n) => {
      t.equal(
        frame.blockPositions.length,
        tetromino.initialBlockStates.length,
        `frame ${n} has correct number of positions`
      );
      t.ok(
        tetromino.frames[frame.left.targetFrame] && frame.left.targetFrame !== n,
        `frame ${n} targets a correct frame for left`
      );
      t.ok(
        tetromino.frames[frame.right.targetFrame] && frame.right.targetFrame !== n,
        `frame ${n} targets a correct frame for right`
      );
    });
    t.end();
  });
});
