import { TetrominoType } from '../../../../types';

export const trad_s: TetrominoType = {
  name: 'trad_s',
  width: 3,
  height: 3,
  frames: [
    { // frame 0, starts left (upright)
      blockPositions: [ [0,1], [1,1], [1,2], [2,2] ],
      left: {
        targetFrame: 3,
        kicks: [[ 0, 0],	[ 1, 0],	[ 1, 1],	[ 0,-2],	[ 1,-2]]
      },
      right: {
        targetFrame: 1,
        kicks: [[ 0, 0],	[-1, 0],	[-1, 1],	[ 0,-2],	[-1,-2]]
      }
    },
    { // frame 1, starts top
      blockPositions: [ [1,2], [1,1], [2,1], [2,0] ],
      left: {
        targetFrame: 0,
        kicks: [[ 0, 0],	[ 1, 0],	[ 1,-1],	[ 0, 2],	[ 1, 2]]
      },
      right: {
        targetFrame: 2,
        kicks: [[ 0, 0],	[ 1, 0],	[ 1,-1],	[ 0, 2],	[ 1, 2]]
      }
    },
    {
      // frame 2, starts right
      blockPositions: [ [2,1], [1,1], [1,0], [0,0] ],
      left: {
        targetFrame: 1,
        kicks: [[ 0, 0],	[-1, 0],	[-1, 1],	[ 0,-2],	[-1,-2]]
      },
      right: {
        targetFrame: 3,
        kicks: [[ 0, 0],	[ 1, 0],	[ 1, 1],	[ 0,-2],	[ 1,-2]]
      }
    },
    {
      // frame 3, starts bottom
      blockPositions: [ [1,0], [1,1], [0,1], [0,2] ],
      right: {
        targetFrame: 0,
        kicks: [[ 0, 0],	[-1, 0],	[-1,-1],	[ 0, 2],	[-1, 2]]
      },
      left: {
        targetFrame: 2,
        kicks: [[ 0, 0],	[-1, 0],	[-1,-1],	[ 0, 2],	[-1, 2]]
      }
    }
  ],
  initialBlockStates: [
    {type: 'block', colour: 'green'},
    {type: 'block', colour: 'green'},
    {type: 'block', colour: 'green'},
    {type: 'block', colour: 'green'}
  ]
};
