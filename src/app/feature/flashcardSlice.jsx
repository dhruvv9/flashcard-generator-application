/* In this file first we are taking the flashcard from the local storage if exists else we are writing the empty
array and after this we are creating slice called flashcardSlice it  accepts an initial state, an object of reducer functions,
 and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
 and we are exporting actions and reducer to use them in other files of the app and can be able to change the state with the help of redux. */

 import { createSlice } from "@reduxjs/toolkit";
//in initialstate we are taking the initial state of localstorage
const initialState = {
  /*here we  r using ternary to check flashcard in the local storage if the flashcard is present then we will parse them 
  or and take take them with the help of getItem() meathod else we will write empty array */ 
  flashcards: localStorage.getItem("flashcards")
    ? JSON.parse(localStorage.getItem("flashcards"))
    : [],
};
/*here we are creating slice as flashcardslice it  accepts an initial state, an object of reducer functions,
 and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state. */
export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
  
    setFlashCard(state, action) {
      state.flashcards.push({
        card: action.payload,
      });
   
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
  },
});

export const { setFlashCard } = flashcardSlice.actions;



export default flashcardSlice.reducer;
