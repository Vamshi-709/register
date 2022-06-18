import './App.css';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import Main from './pages/Main';
import VerifyOTP from './pages/VerifyOTP';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/main' element={<Main />} />
          <Route path='/verifyOTP' element={<VerifyOTP />} />
          <Route path='login' element={<LogIn />} />
        </Routes>

      </div>
    </>

  );
}

export default App;
