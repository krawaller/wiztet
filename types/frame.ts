import {Offset, Position} from './index';

export type TetrominoFrame = {
  blockPositions: Position[]
  left: FrameTarget | null
  right: FrameTarget | null
};

export type FrameTarget = {
  targetFrame: number
  kicks: Offset[]
};
