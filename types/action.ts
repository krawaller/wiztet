import { TetrominoId, RotationDirection } from './';

export type Action = RotateAction;

export type RotateAction = {
  type: 'ROTATEACTION',
  target: TetrominoId,
  dir: RotationDirection
};
