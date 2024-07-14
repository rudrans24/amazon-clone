import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cartout from './components/pages/Cartout';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './redux-store/cart';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    // will run only once when the app component loads...
    onAuthStateChanged(auth, authUser => {
      console.log('THE USER IS >>>', authUser);  
      }, []);
    });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/checkout' element={<Cartout />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;
