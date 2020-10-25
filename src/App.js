import './App.css';
import { Day } from './components/Day.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faTimesCircle);

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Global Planner
      </header>
      <main>
        <Day/>
      </main>
    </div>
  );
}

export default App;
