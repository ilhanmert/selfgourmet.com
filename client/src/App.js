import './App.css';
import LogIn from './pages/LogIn';
import Main from './pages/Main';
import SliderJsx from './components/SliderJsx';
import Popup from './components/Popup';

import Test from './pages/Test';

import {BrowserRouter, Routes, Route, Link, NavLink, Navigate} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useToken from './hooks/useToken'
import NotFound from './pages/NotFound';
import List from './pages/List';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, deneysel } from './themes';
import PartnerProfile from './pages/PartnerProfile';
import Profile from './pages/Profile';
import Sunum from './pages/Sunum';

function App() {
  const [token] = useToken();
  const [modalOpen, setModal] = useState(false);
  const [currPath, setCurrPath] = useState(window.location.pathname);
  useEffect(() => {
    setCurrPath(window.location.pathname)
  }, [])


  // console.log(token ? "t":"f" );
  return (
    <>
    {/* {alert("GAZİ UNIVERSITESI TEKNOLOJI FAKULTESI YAZILIM MUHENDISLIĞI PROJESIDIR --Veriler temsilidir.")} */}
    <BrowserRouter>
      <ThemeProvider theme={deneysel}>
          {/* <div>
            <Link to="/">Home </Link>
            <Link to="/login">Login </Link>
            <Link to="/test">Test </Link>
            <Link to="/list">Listele</Link>
          </div> */}
          
          {/* {token?.token && <Nav setModal={setModal} token={token}></Nav>} */}

          {currPath !== "/login" && <Nav setModal={setModal} token={token}></Nav>}

        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={token?.token ? <Navigate to={"/"} replace/> : <LogIn/>}/>
          <Route path='/slidertest' element={<SliderJsx/>}/>
          <Route path='/test' element={<Test />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/partner/:title/:id' element={<PartnerProfile token={token}/>}/>
          <Route path='/profile' element={<Profile token={token}/>}/>
          <Route path='/sunum' element={<Sunum />}/>
          <Route path='/404' element={<NotFound />}/>
          <Route path="*" element={<Navigate to="/404" replace />}/>
        </Routes>
        {modalOpen && <Popup setModal={setModal}  token={token}/>}

      </ThemeProvider>
      
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
