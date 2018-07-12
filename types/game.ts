import {Tetromino, Ground} from '.';

export type Game = {
  tetrominoes: {
    [tetrId: string]: Tetromino
  }
  ground: Ground,
  height: number,
  width: number
};
