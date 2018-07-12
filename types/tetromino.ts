import {BlockState, TetrominoFrame, Position} from './';

export type TetrominoId = string;

export type Tetromino = {
  id: TetrominoId
  type: TetrominoTypeName
  frameNumber: number
  blockStates: BlockState[]
  position: Position
};

export type TetrominoLibrary = {
  [key in TetrominoTypeName]: TetrominoType<string> // want to use `key` as arg, but that bugs :/
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
  frames: TetrominoFrame[]
  width: number
  height: number
  initialBlockStates: BlockState[]
};
