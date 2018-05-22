import { TetrominoType } from '../../../../types';

export const trad_i: TetrominoType = {
  name: 'trad_i',
  width: 4,
  height: 4,
  frames: [
    { // frame 0, lying above pivot
      blockPositions: [ [0,2], [1,2], [2,2], [3,2] ],
      left: {
        targetFrame: 3,
        kicks: [[0,0], [-1, 0],	[ 2, 0],	[-1, 2],	[ 2,-1]]
      },
      right: {
        targetFrame: 1,
        kicks: [[0,0], [-2, 0],	[ 1, 0],	[-2,-1],	[ 1, 2]]
      }
    },
    { // frame 1, standing right of pivot
      blockPositions: [ [2,3], [2,2], [2,1], [2,0] ],
      left: {
        targetFrame: 0,
        kicks: [[0,0], [ 2, 0],	[-1, 0],	[ 2, 1],	[-1,-2]]
      },
      right: {
        targetFrame: 2,
        kicks: [[0,0], [-1, 0],	[ 2, 0],	[-1, 2],	[ 2,-1]]
      }
    },
    {
      // frame 2, lying below pivot
      blockPositions: [ [3,1], [2,1], [1,1], [0,1] ],
      left: {
        targetFrame: 1,
        kicks: [[0,0], [ 1, 0],	[-2, 0],	[ 1,-2],	[-2, 1]]
      },
      right: {
        targetFrame: 3,
        kicks: [[0,0], [ 2, 0],	[-1, 0],	[ 2, 1],	[-1,-2]]
      }
    },
    {
      // frame 3, standing left of pivot
      blockPositions: [ [1,0], [1,1], [1,2], [1,3] ],
      right: {
        targetFrame: 0,
        kicks: [[0,0], [ 1, 0],	[-2, 0],	[ 1,-2],	[-2, 1]]
      },
      left: {
        targetFrame: 2,
        kicks: [[0,0], [-2, 0],	[ 1, 0],	[-2,-1],	[ 1, 2]]
      }
    }
  ],
  initialBlockStates: [
    {type: 'block', colour: 'magenta'},
    {type: 'block', colour: 'magenta'},
    {type: 'block', colour: 'magenta'},
    {type: 'block', colour: 'magenta'}
  ]
};
