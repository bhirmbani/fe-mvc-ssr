import './App.css';
import TodoListView from './view/screen/todoListView';
import UserProfileView from './view/screen/userProfileView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListView />
        <UserProfileView />
      </header>
    </div>
  );
}

export default App;
