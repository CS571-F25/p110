import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';

import Team from './pages/Team';
import BecomeAnOwner from './pages/BecomeAnOwner';
import AppLayout from './AppLayout';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import News from './pages/News';
import Field from './pages/Field';
import Schedule from './pages/Schedule';
import Login from './pages/Login';
import Story from './pages/Story';
import KnowBeforeYouGo from './pages/field/KnowBeforeYouGo';
import StadiumMap from './pages/field/StadiumMap';
import Parking from './pages/field/Parking';
import FanCodeOfConduct from './pages/field/FanCodeOfConduct';
import CarryInPolicy from './pages/field/CarryInPolicy';
import ContactUs from './pages/field/ContactUs';
import Community from './pages/Community';
import Events from './pages/Events';
import Polls from './pages/Polls';

import jteam from './jsons/team.json';

function App() {

  const [team, setTeam] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("username") ? 1 : 0);

  useEffect(() => {
    setTeam(jteam);
    console.log(jteam);
  }, []);

  return (
    <BrowserRouter basename='/p110/'>
      <Routes>
        <Route path="/" element={<AppLayout team={team} setTeam={setTeam} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
          <Route index element={<Home />} />
          <Route path="/News" element={<News />}></Route>
          <Route path="/Field" element={<Field />}></Route>
          <Route path="/Schedule" element={<Schedule />}></Route>
          <Route path="/Team" element={<Team />}></Route>
          <Route path="/BecomeAnOwner" element={<BecomeAnOwner isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path="/Login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path="/Story" element={<Story />}></Route>
          <Route path="/KnowBeforeYouGo" element={<KnowBeforeYouGo />}></Route>
          <Route path="/StadiumMap" element={<StadiumMap />}></Route>
          <Route path="/Parking" element={<Parking />}></Route>
          <Route path="/FanCodeOfConduct" element={<FanCodeOfConduct />}></Route>
          <Route path="/CarryInPolicy" element={<CarryInPolicy />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Community" element={<Community isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path="/Events" element={<Events />}></Route>    
          <Route path="/Polls" element={<Polls isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>                    
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
