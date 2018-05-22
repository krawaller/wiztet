import { TetrominoType } from '../../../../types';

export const trad_o: TetrominoType = {
  name: 'trad_i',
  width: 2,
  height: 2,
  frames: [
    { // frame 0, first is topleft
      blockPositions: [ [0,1], [1,1], [1,0], [0,0] ],
      left: {
        targetFrame: 3,
        kicks: [[0,0]]
      },
      right: {
        targetFrame: 1,
        kicks: [[0,0]]
      }
    },
    { // frame 1, first is topright
      blockPositions: [ [1,1], [1,0], [0,0], [0,1] ],
      left: {
        targetFrame: 0,
        kicks: [[0,0]]
      },
      right: {
        targetFrame: 2,
        kicks: [[0,0]]
      }
    },
    {
      // frame 2, first is bottomright
      blockPositions: [ [1,0], [0,0], [0,1], [1,1] ],
      left: {
        targetFrame: 1,
        kicks: [[0,0]]
      },
      right: {
        targetFrame: 3,
        kicks: [[0,0]]
      }
    },
    {
      // frame 3, first is bottomleft
      blockPositions: [ [0,0], [0,1], [1,1], [1,0] ],
      right: {
        targetFrame: 0,
        kicks: [[0,0]]
      },
      left: {
        targetFrame: 2,
        kicks: [[0,0]]
      }
    }
  ],
  initialBlockStates: [
    {type: 'block', colour: 'yellow'},
    {type: 'block', colour: 'yellow'},
    {type: 'block', colour: 'yellow'},
    {type: 'block', colour: 'yellow'}
  ]
};
