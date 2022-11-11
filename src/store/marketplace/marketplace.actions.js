import { createActions } from "../../utils/reducer/create-actions";

export const fetchMarketPlaceDataStart = () =>
  createActions("FETCH_MARKETPLACE_START");

export const fetchMarketPlaceDataSuccess = (marketPlaceData) =>
  createActions("FETCH_MARKETPLACE_SUCCESS", marketPlaceData);

export const fetchMarketPlaceDataFailure = (errorMessage) =>
  createActions("FETCH_MARKETPLACE_FAILURE", errorMessage);

export const fetchMarketPlaceAsyncData = () => {
  return async (dispatch) => {
    dispatch(fetchMarketPlaceDataStart());

    try {
      const response = await fetch(
        "https://api.everywatch.com/api/Analysis/GetAnalysisDumy",
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieWFzaEB3ZXliZWUuaW4iLCJuYW1laWQiOiI1ZmZlZjdlMy1mZDExLTQ3YjYtOThkOC00NTU5MTgyZTRhMTQiLCJwcmltYXJ5c2lkIjoiMTQ1IiwibmJmIjoxNjY3OTAyMzMwLCJleHAiOjE3MDI1OTQ0MTEsImlhdCI6MTY2NzkwMjMzMCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTA1MC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDUwLyJ9.z62h5uytUEioMQ1rDdUO7h2PuQUtRLa5oWkp9V-KfCI",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      dispatch(fetchMarketPlaceDataSuccess(data));
    } catch (error) {
      dispatch(fetchMarketPlaceDataFailure(error.message));
    }
  };
};
