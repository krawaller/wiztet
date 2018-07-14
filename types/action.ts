import { TetrominoId, RotationDirection, ShiftDirection } from '.';

export type Action = RotateAction | PetrifyAction | ShiftAction | GravityAction;

export type RotateAction = {
  type: 'ROTATEACTION',
  target: TetrominoId,
  dir: RotationDirection
};

export type PetrifyAction = {
  type: 'PETRIFYACTION'
};

export type ShiftAction = {
  type: 'SHIFTACTION',
  target: TetrominoId,
  dir: ShiftDirection
};

export type GravityAction = {
  type: 'GRAVITYACTION'
}
