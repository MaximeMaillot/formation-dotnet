import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TodoListView from './Views/TodoListView/TodoListView';
import {
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTrash)

function App() {
  return (
    <div>
      <TodoListView />
    </div>
  );
}

export default App;
