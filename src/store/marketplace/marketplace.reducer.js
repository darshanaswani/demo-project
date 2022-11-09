import { MARKETPLACE_ACTIONS_TYPES } from "./marketplace.types";
const INITIAL_STATE = {
  isFetching: false,
  top3MarketPlace: [],
  marketPlaceCounts: {},
  error: null,
};

export const marketplaceReducer = (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case MARKETPLACE_ACTIONS_TYPES.FETCH_MARKETPLACE_START:
      return {
        ...state,
        isFetching: true,
      };
    case MARKETPLACE_ACTIONS_TYPES.FETCH_MARKETPLACE_SUCCESS:
      return {
        ...state,
        top3MarketPlace: action.payload.data.top3Marketplace,
        marketPlaceCounts: action.payload.data.marketplaceCounts,
      };
    case MARKETPLACE_ACTIONS_TYPES.FETCH_MARKETPLACE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
