import {Position, TetrominoId} from './';

export type BlockTypeName =
  | 'block'
;

export type BlockSource = 'ground' | 'tetromino';

export type BlockType<T = BlockTypeName> = {
  name: T
  solid: true
};

export type BlockState = 
  | NormalBlockState
;

export type BasicBlockState = {
  type: BlockTypeName
};

export type RenderedBlockState = BlockState & {
  tetrominoId?: TetrominoId
  tetrominoPosition?: number
  position: Position
  from: BlockSource
};

export type NormalBlockState = BasicBlockState & {
  type: 'block'
  colour: 'magenta' | 'blue' | 'orange' | 'yellow' | 'green' | 'red' | 'purple'
}

export type BlockInfo = {
  state: BlockState
  position: Position
};
