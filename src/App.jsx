import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Container } from 'react-bootstrap';

import Team from './Team';
import BecomeAnOwner from './BecomeAnOwner';
import AppLayout from './AppLayout';
import NoMatch from './NoMatch';
import Home from './Home';
import News from './News';
import Photos from './Photos';
import Schedule from './Schedule';
import Login from './Login';

function App() {

  const [team, setTeam] = useState({});

  useEffect(() => {
    fetch('./src/team.json')
    .then(res => res.json())
    .then(data => {
      setTeam(data);
      console.log(data);
    });
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout team={team} setTeam={setTeam}/>}>
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
