import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Review } from './review/index.js';
import { Home } from './home/index.js';
import { SignUp } from './signUp/index.js';
import { Header } from './header/index.js';
import { Profile } from './profile/index.js';
import { WriteReview } from './review/index.js'
import SwiperPage from './pages/SwiperPage.js';


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
              <Route path='/Seats' element={<SwiperPage/>}></Route>
          </Routes>
        </Router>
      </div>

    </div>    
  );
}

export default App;