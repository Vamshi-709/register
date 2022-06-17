import './App.css';
import SignIn from './components/SignIn';

import Main from './components/Main';
import VerifyOTP from './components/VerifyOTP';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/main' element={<Main />} />
          <Route path='/verifyOTP' element={<VerifyOTP />} />
        </Routes>

      </div>
    </>

  );
}

export default App;
