import { createActions } from "../../utils/reducer/create-actions";
import { AUCTION_ACTIONS_TYPES } from "./auctions.types";

export const fetchAuctionsDataStart = () =>
  createActions(AUCTION_ACTIONS_TYPES.FETCH_AUCTIONS_DATA_START);

export const fetchAuctionsDataSuccess = (auctionsData) =>
  createActions(
    AUCTION_ACTIONS_TYPES.FETCH_AUCTIONS_DATA_SUCCESS,
    auctionsData
  );

export const fetchAuctionsDataFailure = (errorMessage) =>
  createActions(
    AUCTION_ACTIONS_TYPES.FETCH_AUCTIONS_DATA_FAILURE,
    errorMessage
  );

export const fetchAuctionsAsyncData = () => {
  return async (dispatch) => {
    dispatch(fetchAuctionsDataStart());

    try {
      const response = await fetch(
        "https://api.everywatch.com/api/Analysis/GetAuctionPerformanceGraphDumy?type=1&flag=2",
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieWFzaEB3ZXliZWUuaW4iLCJuYW1laWQiOiI1ZmZlZjdlMy1mZDExLTQ3YjYtOThkOC00NTU5MTgyZTRhMTQiLCJwcmltYXJ5c2lkIjoiMTQ1IiwibmJmIjoxNjY3OTAyMzMwLCJleHAiOjE3MDI1OTQ0MTEsImlhdCI6MTY2NzkwMjMzMCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTA1MC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDUwLyJ9.z62h5uytUEioMQ1rDdUO7h2PuQUtRLa5oWkp9V-KfCI",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      dispatch(fetchAuctionsDataSuccess(data));
    } catch (error) {
      dispatch(fetchAuctionsDataFailure(error.message));
    }
  };
};
