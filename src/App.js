
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
    </div>
    </>
    
  );
}

export default App;