import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Header/Footer.jsx';

function App() {
  const [showlogin, setShowlogin] = useState(false);

  return (
    <>
      <div className='w-full border border-b-2 border-orange-400 border-x-0 border-t-0 p-1 text-black font-bold text-center text-[17px] mx-0'>
        Our Recipe Your Food 💖
      </div>
      <div className='max-w-5xl mx-auto'>
        <Header showlogin={showlogin} setShowlogin={setShowlogin} />
        <div className='min-h-[clac(100vh-136px)]'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
