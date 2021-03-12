import getTodoList from "../api/todoListAPI";

export async function fetchTodoList() {
  const result = await getTodoList();
  return result;
}
