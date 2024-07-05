import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Confluence from './pages/Confluence'; 
import Home from './pages/Home';
import Space from './pages/Space';
import People from './pages/People';
import Space1 from './pages/Space1';
import Space2 from './pages/Space2';
import Space3 from './pages/Space3';

function App() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Confluence />} />
            <Route path='/home' element={<Home />} />
            <Route path='/space' element={<Space />} />
            <Route path='/people' element={<People />} />
            <Route path='/space1' element={<Space1 />} />
            <Route path='/space2' element={<Space2 />} />
            <Route path='/space3' element={<Space3 />} />
          </Routes>
        </Router>
      </>
    );
}

export default App;
