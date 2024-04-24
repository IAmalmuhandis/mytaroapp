import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FirstPage from './pages/firstPage';
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
