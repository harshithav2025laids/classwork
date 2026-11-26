import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Projects from './pages/projects';
import Tasks from './pages/tasks';
import Login from './pages/login';
import Elements from './pages/elements';
import Tests from './pages/tests';
import Team from './pages/team';
import Clients from './pages/clients';
import Dashboard from './pages/dashboard';
import Calender from './pages/calender';
import Settings from './pages/settings';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path= "/elements" element={<Elements />} />
        <Route path= "/tests" element={<Tests />} />
        <Route path= "/team" element={<Team />} />
        <Route path= "/clients" element={<Clients />} />
        <Route path= "/dashboard" element={<Dashboard />} />
        <Route path= "/calender" element={<Calender />} />
        <Route path= "/settings" element={<Settings />} />
      </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;