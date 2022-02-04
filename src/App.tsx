
import './App.css';
import { Child, ChildAsFC } from './components/Child';

function App() {
  return (
    <div className="App">
      <h1>React TypeScript </h1>
      <Child color='red' onClick={() => console.log("clicked")}/>
      <ChildAsFC color='blue' onClick={() => console.log("clicked")}/>
    </div>
  );
}

export default App;
