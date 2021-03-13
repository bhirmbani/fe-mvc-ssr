import { rootReducerInterface } from "../../controller/state/rootReducer";
import stateViewManager from "../common/stateViewManager";

export default function UserProfileView(props: rootReducerInterface) {
  return (
    <div>
      <p>User Profile view</p>
      {stateViewManager({
        state: props.state.todoList.loadingState,
        LoadingComponent: <p>Loading...</p>,
        SuccessComponent: <p>{props.state.todoList.todos[0].content}</p>,
        ErrorComponent: <p>Error...</p>,
        DefaultComponent: <p>Loading...</p>,
      })}
    </div>
  );
}
