import {BlockInfo, TetrominoTypeName, Tetromino, Position, BlockState, Rendering, RenderedBlockState, NormalBlockState} from '../types';

const printBlockState = (info: RenderedBlockState) => (info as NormalBlockState).colour[0];

const printBlockInfo = (info: BlockInfo) => info.state.colour[0];

export const stringifyBlockInfos = (infos: BlockInfo[], width, height): string[] => {
  return infos.reduce(
    (mem: string[], info) => {
      const [x,y] = info.position
      return [
        ...mem.slice(0, y),
        mem[y].substr(0, x) + printBlockInfo(info) + mem[y].substr(x + 1),
        ...mem.slice(y + 1)
      ];
    }, Array.from(Array(height)).map(() => ' '.repeat(width))
  ).reverse();
}

export const makeTetromino = (type: TetrominoTypeName, clrs: string, frameNumber: number, position: Position):Tetromino => ({
  id: 'foo',
  type,
  frameNumber,
  position,
  blockStates: clrs.split('').map(c => ({
    type: 'block',
    colour: {y: 'yellow', b: 'blue', m: 'magenta', o: 'orange', r: 'red', p: 'purple', g: 'green'}[c] || 'blue'
  }) as BlockState)
});

export const stringifyRender = (rnd: Rendering, width: number, height: number): string[] => {
  return Object.keys(rnd).reduce(
    (mem, key) => {
      const info = rnd[key], [x,y] = info.position;
      return [
        ...mem.slice(0, y),
        mem[y].substr(0, x) + printBlockState(info) + mem[y].substr(x + 1),
        ...mem.slice(y + 1)
      ];
    },
    Array.from(Array(height)).map(() => ' '.repeat(width))
  ).reverse();
};
