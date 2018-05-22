import {BlockState, Frame, Position} from './';

export type TetrominoId = string;

export type Tetromino = {
  id: TetrominoId
  type: TetrominoTypeName
  frameNumber: number
  blockStates: BlockState[]
  position: Position
};

export type TetrominoLibrary = {
  [key in TetrominoTypeName]: TetrominoType<TetrominoTypeName> // bugs for key :(
};

export type TetrominoTypeName =
  | 'trad_i'
  | 'trad_j'
  | 'trad_l'
  | 'trad_o'
  | 'trad_s'
  | 'trad_t'
  | 'trad_z'
;

export type TetrominoType<T = TetrominoTypeName> = {
  name: T
  frames: Frame[]
  width: number
  height: number
  initialBlockStates: BlockState[]
};
