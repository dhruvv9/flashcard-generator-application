/*in this file we are creating the store of redux so we can get access to the store in other files*/
import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "./feature/flashcardSlice";

const store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
  },
});
export default store;
