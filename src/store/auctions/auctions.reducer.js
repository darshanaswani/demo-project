import {AUCTION_ACTIONS_TYPES} from "./auctions.types"
const INITIAL_STATE = {
    isFetching:false,
    auctionsData:[],
    error:null
}

export const auctionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUCTION_ACTIONS_TYPES.FETCH_AUCTIONS_DATA_START:
        return {
            ...state,
            isFetching: true,
        };
        case AUCTION_ACTIONS_TYPES.FETCH_AUCTIONS_DATA_SUCCESS:
        return {
            ...state,
            auctionsData: action.payload,
        }
        case AUCTION_ACTIONS_TYPES.FETCH_AUCTIONS_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
        return state;
    }
    }