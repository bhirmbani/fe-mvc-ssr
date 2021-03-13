import todoListState, { InitialStateTodoList } from "./todoListState";

export interface rootReducerInterface {
  state: {
    todoList: InitialStateTodoList;
  };
}

const rootReducer = {
  todoList: todoListState,
};

export default rootReducer;
