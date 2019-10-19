const initialState = {
    count: 0,
    results: []
}

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line
  switch (action.type){
    case 'INCREASE':
      return { ...state, count: state.count + 1 };
    case 'DECREASE':
      return { ...state, count: state.count - 1 };
    case 'INCREASE_5':
      return { ...state, count: state.count + action.value };
    case 'DECREASE_5':
      return { ...state, count: state.count - action.value };
    case 'STORE':
    console.log(state.results);
      return { ...state, results: state.results.concat({ value: state.count }) };
    case 'CLEAR_COUNTER':
      return { ...state, count: 0 };
    case 'CLEAR_ALL':
      return { count: 0, results: state.results = [] };
  }
  return state;
}

export default reducer;
