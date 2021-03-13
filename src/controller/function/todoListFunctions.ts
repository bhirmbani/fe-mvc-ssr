import { createAsyncThunk } from "@reduxjs/toolkit";
import getTodoList from "../api/todoListAPI";

export const fetchTodoList = createAsyncThunk(
  'todoList/get',
  async () => {
    const response = await getTodoList()
    return response;
  }
)
