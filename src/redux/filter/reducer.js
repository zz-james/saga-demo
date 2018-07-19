import { name } from './identity';
import * as actions from './deltas';

const reducer = (state = initialState, action) => {
  const type = action.type;

  switch (type) { 
    case actions.MERGE_FILTERS:
      return { 
        ...state,
        filters: action.data, 
      }
    default:
      return state;
  }
}

const selectors = {
  getFilters: (state) => state[name].filters,
}

const initialState = {
  filters: []
};

export { reducer, selectors }