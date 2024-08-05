import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PageLoading from './component/loading/pageLoading';
// Lazy import of components
const FirstPage = lazy(() => import('./pages/HomePage'));
const Manual_Ai = lazy(() => import('./pages/manual_ai'));
const SignUp = lazy(() => import('./pages/auth/signUp'));
const SignIn = lazy(() => import('./pages/auth/signIn'));
const Ai_assistant = lazy(() => import('./pages/Ai_assistant'));
const S = lazy(() => import('./Layout/stepper'));
const Confirm = lazy(() => import('./pages/Confirm'));
const EventCenters = lazy(() => import('./pages/eventCenter/EventCenters'));
const Manual = lazy(() => import('./pages/manual'));
const SingleEventCenter = lazy(() => import('./pages/eventCenter/singleEventCenter'));
const HireOtherService = lazy(() => import('./pages/hireOtherService'));
const ChooseService = lazy(() => import('./pages/chooseServices'));
const Djs = lazy(() => import('./pages/vendors/dj'));
const Mcs = lazy(() => import('./pages/vendors/mc'));
const SingleDj = lazy(() => import('./pages/vendors/singleDj'));
const Caterer = lazy(() => import('./pages/vendors/caterer'));
const SingleCaterer = lazy(() => import('./pages/vendors/singleCaterer'));
const PaymentMethod = lazy(() => import('./pages/paymentMethod'));
const CardPayment = lazy(() => import('./pages/cardPayment'));
const OtpVerification = lazy(() => import('./pages/otpVerification'));
const SuccessfullPage = lazy(() => import('./pages/successfulPage'));
const BankTransfer = lazy(() => import('./pages/bankTransfer'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/choose" element={<Manual_Ai />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/AiAssistant" element={<Ai_assistant />} />
          <Route path="/AiAssistant/stepper" element={<S />} />
          <Route path="/AiAssistant/Confirm" element={<Confirm />} />
          <Route path="/Manual" element={<Manual />} />
          <Route path="/event_centers" element={<EventCenters />} />
          <Route path="/event_centers/single" element={<SingleEventCenter />} />
          <Route path="/vendor/dj/single" element={<SingleDj />} />
          <Route path="/vendor/caterer/single" element={<SingleCaterer />} />
          <Route path="/Manual/hire_other_service" element={<HireOtherService />} />
          <Route path="/Manual/hire_other_service/choose_service" element={<ChooseService />} />
          <Route path="/vendor/dj" element={<Djs />} />
          <Route path="/vendor/mc" element={<Mcs />} />
          <Route path="/vendor/caterer" element={<Caterer />} />
          <Route path="/paymentMethod" element={<PaymentMethod />} />
          <Route path="/cardPayment" element={<CardPayment />} />
          <Route path="/otpVerification" element={<OtpVerification />} />
          <Route path="/successfull" element={<SuccessfullPage />} />
          <Route path="/bankTransfer" element={<BankTransfer />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;