import {Offset, Position} from './index';

export type Frame = {
  blockPositions: Position[]
  left: FrameTarget | null
  right: FrameTarget | null
};

export type FrameTarget = {
  targetFrame: number
  kicks: Offset[]
};
