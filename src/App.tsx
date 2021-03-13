import { connect } from "react-redux";
import "./App.css";
import { rootReducerInterface } from "./controller/state/rootReducer";
import TodoListView from "./view/screen/todoListView";
import UserProfileView from "./view/screen/userProfileView";

function App(props: { state: any }) {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListView />
        <UserProfileView state={props.state} />
      </header>
    </div>
  );
}

const mapStateToProps = (state: rootReducerInterface) => ({
  state,
});

export default connect(mapStateToProps, null)(App);
