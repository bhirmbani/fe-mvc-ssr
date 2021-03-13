import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeneralStateModel } from "../../model/commonModel";
import { todosInitialState } from "../../model/todoListComponentModel";
import TodoModel from "../../model/todoListModel";
import { fetchTodoList } from "../function/todoListFunctions";

export interface InitialStateTodoList extends GeneralStateModel {
  todos: TodoModel[];
}

const initialState: InitialStateTodoList = {
  todos: todosInitialState,
  loadingState: "default",
};

const TodoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<TodoModel[]>) {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loadingState = "success";
    });
    builder.addCase(fetchTodoList.pending, (state) => {
      state.loadingState = "loading";
    });
    builder.addCase(fetchTodoList.rejected, (state) => {
      state.loadingState = "error";
    });
  },
});

export const { setTodos } = TodoListSlice.actions;
export default TodoListSlice.reducer;
