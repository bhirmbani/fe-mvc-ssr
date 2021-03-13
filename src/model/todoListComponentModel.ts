import TodoModel from "./todoListModel";

export interface TodoListComponentModel {
  todos: TodoModel[];
}

export const todosInitialState: TodoModel[] = [
  {
    content: "",
    is_checked: false,
  },
];
