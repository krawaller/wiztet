import {Tetromino, Rendering, BlockSource} from '../../../types';
import {tetrominoes} from '../data';

export const renderTetromino = (tetromino: Tetromino): Rendering => {
  const blueprint = tetrominoes[tetromino.type];
  return tetromino.blockStates.reduce((mem, state, n) => {
    const [offsetX, offsetY] = blueprint.frames[tetromino.frameNumber].blockPositions[n];
    const x = offsetX + tetromino.position[0], y = offsetY + tetromino.position[1];
    return {
      ...mem,
      [x + '_' + y]: {
        ...state,
        position: [x, y] as [number,number],
        tetrominoPosition: n,
        tetrominoId: tetromino.id,
        from: 'tetromino' as BlockSource
      }
    };
  }, {} as Rendering);
};
