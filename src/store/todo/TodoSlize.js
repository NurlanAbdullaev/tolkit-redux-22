import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlize = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    compelteTodo(state, action) {
      state.todos = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
    editTodo(state, action) {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.todoTitle }
          : item
      );
    },
  },
});

export const todoActions = todoSlize.actions;
