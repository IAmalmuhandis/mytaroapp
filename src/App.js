import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FirstPage from './pages/firstPage';
import './App.css'
import Manual_Ai from './pages/manual_ai';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Ai_assistant from './pages/Ai_assistant';
import S from './Layout/stepper';
import Confirm from './pages/Confirm';
import EventCenters from './pages/EventCenters';
import Manual from './pages/manual';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/choose' element={<Manual_Ai />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/AiAssistant' element={<Ai_assistant />} />
        <Route path='/AiAssistant/stepper' element={<S />} />
        <Route path='/AiAssistant/Confirm' element={<Confirm />} />
        <Route path='/Manual' element={<Manual />} />
        <Route path='/Manual/event_centers' element={<EventCenters />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
