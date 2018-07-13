import {Game, Rendering, TetrominoId} from '../../../types';
import { renderTetromino } from './render.tetromino';
import { renderGround } from './render.ground';

export const renderGame = (game: Game, excludeTetrId?: TetrominoId): Rendering => {
  // TODO - add Ground rendering once we know what we want there
  return {
    ...Object.keys(game.tetrominoes).filter(tetrId => tetrId !== excludeTetrId).reduce(
      (mem, tetrId) => Object.assign(mem, renderTetromino(game.tetrominoes[tetrId])),
      {}
    ),
    ...renderGround(game.ground)
  };
};
