import axios, { AxiosResponse } from "axios";
import TodoModel from "../../model/todoListModel";

export default async function getTodoList() {
  try {
    const response = await axios.get<null, AxiosResponse<TodoModel[]>>(
      "https://private-a9cde-todo146.apiary-mock.com/todo"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
