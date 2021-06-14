import { combineReducers } from "redux";
import friendlist from "./userselect";

const allReducers = combineReducers({
  //Это метод, который позволяет вместо того, чтобы создавать один огромный reducer для всего состояния приложения сразу, разбивать его на отдельные модули
  friends: friendlist
});

export default allReducers;
