import axios from "axios";
export default async function getTodoList() {
  try {
    const response = await axios.get(
      "https://private-a9cde-todo146.apiary-mock.com/todo"
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error)
  }
}
