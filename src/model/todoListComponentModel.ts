import TodoModel from "./todoListModel";

export interface TodoListComponentModel {
  isModalOpened: boolean;
  todos: TodoModel[];
}

export const todosInitialState: TodoModel[] = [
  {
    content: "",
    is_checked: false,
  },
];
