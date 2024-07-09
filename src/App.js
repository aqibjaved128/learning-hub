import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import FindInstitute from './components/login/FindInstitute';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Login from './components/login/Login';
import ForgotPassword from './components/Forgot Password/ForgotPassword';
import ResetPassword from './components/Reset Password/ResetPassword';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup/Signup';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Loader from './components/Loader/Loader';
import Profile from './components/Profile/Profile';
import UpdatePassword from './components/Update Password/UpdatePassword';
import Help from './components/Help/Help';
import Lessons from './components/Lessons/Lessons';

function App() {
  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Futura","Poppins","Roboto"]
      }
    })
  },[])
  return (
    <Router>
      <Header/>
      <Routes>
        <Route extact path='/' element={<Login/>} />
        <Route extact path='/sign-up' element={<Signup/>} />
        <Route extact path='/password/forgot' element={<ForgotPassword/>} />
        <Route extact path='/password/reset' element={<ResetPassword/>} />
        <Route extact path='/dashboard' element={<Dashboard/>} />
        <Route extact path='/sign-up' element={<Signup/>} />
        <Route extact path='/*' element={<PageNotFound/>} />
        <Route extact path='/sad' element={<Loader/>} />
        <Route extact path='/my-profile' element={<Profile/>} />
        <Route extact path='/settings' element={<UpdatePassword/>} />
        <Route extact path='/help' element={<Help/>} />
        <Route extact path='/lessons' element={<Lessons/>} />
        
      </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
