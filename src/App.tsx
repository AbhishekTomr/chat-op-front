import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import LoginWrapper from './components/Login/LoginWrapper';


function App() {
  return (
      <div className="App">
      <Header/>
      <Routes>
        <Route path='/sign-in' element={<LoginWrapper/>} />
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
