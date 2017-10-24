const initialState = {
  points: [
    { value: 12, time: 12 },
    { value: 12, time: 13 },
    { value: 20, time: 20 },
    { value: 13, time: 21 },
    { value: 31, time: 23 },
    { value: 14, time: 30 },
    { value: 16, time: 40 },

    { value: 12, time: 112 },
    { value: 12, time: 113 },
    { value: 5, time: 120 },
    { value: 13, time: 121 },
    { value: 11, time: 123 },
    { value: 124, time: 130 },
    { value: 15, time: 140 },


    { value: 121, time: 212 },
    { value: 22, time: 213 },
    { value: 120, time: 220 },
    { value: 243, time: 221 },
    { value: 311, time: 223 },
    { value: 24, time: 230 },
    { value: 5, time: 240 },

    { value: 122, time: 312 },
    { value: 22, time: 313 },
    { value: 110, time: 320 },
    { value: 223, time: 321 },
    { value: 341, time: 323 },
    { value: 234, time: 330 },
    { value: 116, time: 340 },


    { value: 22, time: 412 },
    { value: 12, time: 413 },
    { value: 130, time: 420 },
    { value: 243, time: 421 },
    { value: 321, time: 423 },
    { value: 14, time: 430 },
    { value: 126, time: 440 },
  ],
  offset: 0,
  limit: 40
};

const nodes = (state = initialState, action) => {
  switch (action.type) {
  case 'CHART_VIEWPORT_UPDATE': {
    const { offset, limit } = action.payload;
    const newLimit = limit;
    return { ...state, offset, limit: newLimit };
  }
  default:
    return state;
  }
};

export default nodes;
