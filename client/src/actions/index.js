import axios from "axios";
import { FETCH_USER, NEW_GAME } from "./types";

//lets the front check that a user is currently logged in
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

//dispatches the action for starting a new game
export const newGames = () => async (dispatch) => {
  const res = await axios.get("/api/game/new");
  dispatch({ type: NEW_GAME, payload: res.data });
};
