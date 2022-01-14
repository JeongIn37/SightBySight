import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Review } from './review/index.js';
import { Home } from './home/index.js';
import { SignUp } from './signUp/index.js';
import { Header } from './header/index.js';
import { Profile } from './profile/index.js';



function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div className='headerMain'>
            <Header />
          </div>
          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/SignUp' element={<SignUp />}></Route>
              <Route path='/MyPage' element={<Profile />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
