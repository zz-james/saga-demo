import { name } from './identity';
import * as actions from './actions';

const reducer = (state = initialState, action) => {
  const type = action.type;

  switch (type) { 
    case actions.MERGE_STOCKS:
      return { 
        ...state,
        stockItems: action.data,
      }
    default:
      return state;
  }
}

const selectors = {
  getStockItems: (state) => state[name].stockItems,
}

const initialState = {
  stockItems: []
};

export { reducer, selectors }