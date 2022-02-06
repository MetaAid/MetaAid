import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import About from './Pages/About';
import Faq from './Pages/Faq';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard/Personal/Dashboard';
import Earthquake from './Pages/Earthquake';
import Tsunami from './Pages/Tsunami';
import Lightning from './Pages/Lightning';
import Wildfire from './Pages/Wildfire';
import Floods from './Pages/Floods';
import Volunteer from './Dashboard/Personal/Volunteer'
import Resources from './Dashboard/Personal/Resources';
import Funding from './Dashboard/Personal/Funding';
import ContinueSignUp from './Pages/ContinueSignUp';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="FAQ" element={<Faq />} />
      <Route path="Prepare/Earthquake" element={<Earthquake />} />
      <Route path="Prepare/Tsunami" element={<Tsunami />} />
      <Route path="Prepare/Lightning" element={<Lightning />} />
      <Route path="Prepare/Wildfire" element={<Wildfire />} />
      <Route path="Prepare/Floods" element={<Floods />} />    
      <Route path="Login" element={<Login />} />
      <Route path="SignUp" element={<Signup />} />
      <Route path="SignUp/Next" element={<ContinueSignUp/>} />
      <Route path="Personal/Dashboard" element={<Dashboard />} />
      <Route path="Personal/Volunteer" element={<Volunteer />} />
      <Route path="Personal/Resource" element={<Resources />} />
      <Route path="Personal/Funding" element={<Funding />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
