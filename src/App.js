import logo from './logo.svg';
import './App.css';
import { Review } from './review/index.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Header
        </p>
      
      </header>

      <div>
        <Review />
      </div>
    </div>
  );
}

export default App;
