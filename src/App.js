import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Workspace from "./Workspace";
import Workspacelv1 from "./levels/workspacelv1.js";
import Workspacelv2 from "./levels/workspacelv2.js";
import Workspacelv3 from "./levels/workspacelv3.js";
import Workspacelv4 from "./levels/workspacelv4.js";
import Homepage from "./Homepage";
import Pubsub from "./testRabbit/Pubsub.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Homepage />} />
          <Route path='/workspace' element={<Workspace />} />
            <Route path='/workspace1' element={<Workspacelv1 />} />
            <Route path='/workspace2' element={<Workspacelv2 />} />
            <Route path='/workspace3' element={<Workspacelv3 />} />
            <Route path='/workspace4' element={<Workspacelv4 />} />
          {/* <Route path='/homepage' element={<Homepage />} /> */}
          <Route path='/pubsub' element={<Pubsub />} />

          <Route path='*' element={<Navigate to='/home' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
