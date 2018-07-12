import {Offset, Position} from '.';

export type TetrominoFrame = {
  blockPositions: Position[]
  left: FrameTarget | null
  right: FrameTarget | null
};

export type FrameTarget = {
  targetFrame: number
  kicks: Offset[]
};
