import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Workspace from "./Workspace";
import Homepage from "./Homepage";
import Pubsub from "./testRabbit/Pubsub.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Homepage />} />
          <Route path='/workspace' element={<Workspace />} />
          {/* <Route path='/homepage' element={<Homepage />} /> */}
          <Route path='/pubsub' element={<Pubsub />} />

          <Route path='*' element={<Navigate to='/home' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
