import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     // mutable 가능 (Redux 에 포함된 immer 패키지가 immutable 하게 처리해줌)
//     state.push({
//       text: action.payload,
//       id: Date.now(),
//     });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

// export const actions = {
//   addToDo,
//   deleteToDo,
// };

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        text: action.payload,
        id: Date.now(),
      });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
