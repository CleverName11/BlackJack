import axios from "axios";
import { FETCH_USER, NEW_GAME } from "./types";

//lets the front check that a user is currently logged in
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

//accepts the data from the new game button
//doesn't really do anything right now
export const newGame = () => async (dispatch) => {
  const res = await axios.get("/api/game/new");
  dispatch({ type: NEW_GAME, payload: res.data });
};
