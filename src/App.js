
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SwiperPage from './pages/SwiperPage.js';

function App() {
  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<SwiperPage/>}></Route>
      </Routes>
    </Router>
    </div>
    <div>
      <p>여기다 좌석 넣으려고여</p>
//고치기
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Review } from './review/index.js';
import { Home } from './home/index.js';
import { SignUp } from './signUp/index.js';
import { Header } from './header/index.js';
import { Profile } from './profile/index.js';
import { WriteReview } from './review/index.js'


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
              <Route path='/ReadReview' element={<Review />}></Route>
              <Route path='/WriteReview' element={<WriteReview />}></Route>
          </Routes>
        </Router>
      </div>

    </div>
    </>
    
  );
}

export default App;