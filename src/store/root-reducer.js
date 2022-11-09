import { combineReducers } from "redux";
import { marketplaceReducer } from "./marketplace/marketplace.reducer";
import { auctionsReducer } from "./auctions/auctions.reducer";

export const rootReducer = combineReducers({
  marketPlace: marketplaceReducer,
  auctions: auctionsReducer,
});
