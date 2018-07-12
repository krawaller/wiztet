import { TetrominoId, RotationDirection } from '.';

export type Action = RotateAction | PetrifyAction;

export type RotateAction = {
  type: 'ROTATEACTION',
  target: TetrominoId,
  dir: RotationDirection
};

export type PetrifyAction = {
  type: 'PETRIFYACTION'
};
