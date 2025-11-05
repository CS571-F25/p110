import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Container } from 'react-bootstrap';

import Team from './pages/Team';
import BecomeAnOwner from './pages/BecomeAnOwner';
import AppLayout from './AppLayout';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import News from './pages/News';
import Photos from './pages/Photos';
import Schedule from './pages/Schedule';
import Login from './pages/Login';

import jteam from './jsons/team.json';

function App() {

  const [team, setTeam] = useState({});

  useEffect(() => {
    setTeam(jteam);
    console.log(jteam);
  }, []);

  return (
    <BrowserRouter basename='/p110/'>
      <Routes>
        <Route path="/" element={<AppLayout team={team} setTeam={setTeam} />}>
          <Route index element={<Home />} />
          <Route path="/News" element={<News />}></Route>
          <Route path="/Photos" element={<Photos />}></Route>
          <Route path="/Schedule" element={<Schedule />}></Route>
          <Route path="/Team" element={<Team />}></Route>
          <Route path="/BecomeAnOwner" element={<BecomeAnOwner />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
