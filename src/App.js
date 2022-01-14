import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Review } from './review/index.js';
import { Home } from './home/index.js';
import { SignUp } from './signUp/index.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Header
        </p>
      
      </header>

      <div>
        <Router>
          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/SignUp' element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
