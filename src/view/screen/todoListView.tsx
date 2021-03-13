import { useEffect } from "react";
import { fetchTodoList } from "../../controller/function/todoListFunctions";
import store from "../../controller/state/store";

export default function TodoListView() {
  useEffect(() => {
    store.dispatch(fetchTodoList());
  }, []);
  return (
    <div>
      <p>Todo List View</p>
    </div>
  );
}
