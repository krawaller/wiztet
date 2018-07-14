
import {Game, GravityAction} from '../../../types';
import { renderTetromino } from '../render/render.tetromino';
import { outOfBounds } from '../helpers/detect.outofbounds';
import { renderGround } from '../render/render.ground';
import { renderGame } from '../render/render.game';
import { findCollisions } from '../helpers/find.collisions';

export const gravity = (game: Game, action: GravityAction): Game => {
  return game;
};
