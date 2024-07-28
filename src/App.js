import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FirstPage from './pages/HomePage';
import './App.css'
import Manual_Ai from './pages/manual_ai';
import SignUp from './pages/auth/signUp';
import SignIn from './pages/auth/signIn';
import Ai_assistant from './pages/Ai_assistant';
import S from './Layout/stepper';
import Confirm from './pages/Confirm';
import EventCenters from './pages/eventCenter/EventCenters';
import Manual from './pages/manual';
import SingleEventCenter from './pages/eventCenter/singleEventCenter';
import HireOtherService from './pages/hireOtherService';
import ChooseService from './pages/chooseServices';
import Djs from './pages/vendors/dj';
import Mcs from './pages/vendors/mc';
import SingleDj from './pages/vendors/singleDj';
import Caterer from './pages/vendors/caterer';
import SingleCaterer from './pages/vendors/singleCaterer';
import PaymentMethod from './pages/paymentMethod';
import CardPayment from './pages/cardPayment';

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
        <Route path='/event_centers' element={<EventCenters />} />
        <Route path='/event_centers/single' element={<SingleEventCenter />} />
        <Route path='/vendor/dj/single' element={<SingleDj />} />
        <Route path='/vendor/caterer/single' element={<SingleCaterer />} />
        <Route path='/Manual/hire_other_service' element={<HireOtherService />} />
        <Route path='/Manual/hire_other_service/choose_service' element={<ChooseService />} />
        <Route path='/vendor/dj' element={<Djs />} />
        <Route path='/vendor/mc' element={<Mcs />} />
        <Route path='/vendor/caterer' element={<Caterer />} />
        <Route path='/paymentMethod' element={<PaymentMethod />} />
        <Route path='/cardPayment' element={<CardPayment />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
