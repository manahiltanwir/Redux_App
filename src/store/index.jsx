import { configureStore, combineReducers } from "@reduxjs/toolkit";
import example from "../store/example";
import teachers from "../store/teachers";

const store = configureStore({
  reducer: {
    example,
    teachers,
  },
});
export default store;
