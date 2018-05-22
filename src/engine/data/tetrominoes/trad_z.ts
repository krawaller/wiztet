import { TetrominoType } from '../../../../types';

export const trad_z: TetrominoType = {
  name: 'trad_z',
  width: 3,
  height: 3,
  frames: [
    { // frame 0, starts left (upright)
      blockPositions: [ [0,2], [1,2], [1,1], [2,1] ],
      left: {
        targetFrame: 3,
        kicks: [[ 0, 0], [ 1, 0], [ 1, 1], [ 0,-2], [ 1,-2]]
      },
      right: {
        targetFrame: 1,
        kicks: [[ 0, 0], [-1, 0], [-1, 1], [ 0,-2], [-1,-2]]
      }
    },
    { // frame 1, starts top
      blockPositions: [ [2,2], [2,1], [1,1], [1,0] ],
      left: {
        targetFrame: 0,
        kicks: [[ 0, 0], [ 1, 0], [ 1,-1], [ 0, 2], [ 1, 2]]
      },
      right: {
        targetFrame: 2,
        kicks: [[ 0, 0], [ 1, 0], [ 1,-1], [ 0, 2], [ 1, 2]]
      }
    },
    {
      // frame 2, starts right
      blockPositions: [ [2,0], [1,0], [1,1], [0,1] ],
      left: {
        targetFrame: 1,
        kicks: [[ 0, 0], [-1, 0], [-1, 1], [ 0,-2], [-1,-2]]
      },
      right: {
        targetFrame: 3,
        kicks: [[ 0, 0], [ 1, 0], [ 1, 1], [ 0,-2], [ 1,-2]]
      }
    },
    {
      // frame 3, starts bottom
      blockPositions: [ [0,0], [0,1], [1,1], [1,2] ],
      right: {
        targetFrame: 0,
        kicks: [[ 0, 0], [-1, 0], [-1,-1], [ 0, 2], [-1, 2]]
      },
      left: {
        targetFrame: 2,
        kicks: [[ 0, 0], [-1, 0], [-1,-1], [ 0, 2], [-1, 2]]
      }
    }
  ],
  initialBlockStates: [
    {type: 'block', colour: 'red'},
    {type: 'block', colour: 'red'},
    {type: 'block', colour: 'red'},
    {type: 'block', colour: 'red'}
  ]
};
