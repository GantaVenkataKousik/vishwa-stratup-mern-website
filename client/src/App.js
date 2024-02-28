
import React, { useEffect } from 'react';
import Viswa from "./pages/Viswa.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./pages/Admin.jsx";
import { Routes, Route } from "react-router-dom";

function App({imageUrl}) {



  return (
    <>
      
      <Routes>
        <Route path="/" element={<Viswa imageUrl={imageUrl} />} />
        <Route path="/home" element={<Viswa imageUrl={imageUrl}/>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>

  );
}

export default App;
