import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Review } from './review/index.js';
import { Home } from './home/index.js';
import { SignUp } from './signUp/index.js';
import { Header } from './header/index.js';
import { Profile } from './profile/index.js';
import { WriteReview } from './review/index.js'
import Seats from './pages/Seats.js';


function App() {
  return (
    <div className="App">
      <Router>
        {/*<div className='headerMain'>
          <Header />
        </div>*/}
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/MyPage/:nickName' element={<Profile />}></Route>
          <Route path='/ReadReview/:reviewNo' element={<Review />}></Route>
          <Route path='/WriteReview/:theaterId/:theaterRow/:theaterColumn' element={<WriteReview />}></Route>
          <Route path='/Seats' element={<Seats />}></Route>
        </Routes>
      </Router>
    </div>    
  );
}

export default App;