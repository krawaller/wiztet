import { TetrominoType } from '../../../../types';

export const trad_l: TetrominoType = {
  name: 'trad_l',
  width: 3,
  height: 3,
  frames: [
    { // frame 0, foot right
      blockPositions: [ [2,2], [2,1], [1,1], [0,1] ],
      left: {
        targetFrame: 3,
        kicks: [[ 0, 0],	[ 1, 0],	[ 1, 1],	[ 0,-2],	[ 1,-2]]
      },
      right: {
        targetFrame: 1,
        kicks: [[ 0, 0],	[-1, 0],	[-1, 1],	[ 0,-2],	[-1,-2]]
      }
    },
    { // frame 1, foot down (upright)
      blockPositions: [ [2,0], [1,0], [1,1], [1,2] ],
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
      // frame 2, foot left
      blockPositions: [ [0,0], [0,1], [1,1], [2,1] ],
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
      // frame 3, foot up
      blockPositions: [ [0,2], [1,2], [1,1], [1,0] ],
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
    {type: 'block', colour: 'orange'},
    {type: 'block', colour: 'orange'},
    {type: 'block', colour: 'orange'},
    {type: 'block', colour: 'orange'}
  ]
};
