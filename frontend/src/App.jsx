import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { SessionContext } from './SessionContext';
import HomePage from './pages/Home';
import Chat from './pages/Chat';
import Summary from './pages/Summary';
import Upcoming from './pages/Upcoming';
import Header from './components/Header';
import MiniMeet from './pages/MiniMeet';
import Course from './pages/Course';
import FlashCard from './pages/FlashCards.jsx';


function App() {
  const { sessionData } = useContext(SessionContext);

  return (
    <BrowserRouter>
      {/* Header with sessionData */}
      <Header sessionData={sessionData} />

      <Routes>
        {/* Redirect "/" to session-specific home */}
        <Route path="/" element={<Navigate to={`/${sessionData}/home`} replace />} />

        {/* Session-specific routes */}
        <Route path="/:session/home" element={<HomePage sessionData={sessionData} />} />
        <Route path="/:session/chat" element={<Chat sessionData={sessionData} />} />
        <Route path="/:session/summary" element={<Summary sessionData={sessionData} />} />
        <Route path="/:session/flashcards" element={<FlashCards sessionData={sessionData} />} />
        <Route path="/:session/ppt" element={<Upcoming sessionData={sessionData} />} />
        <Route path="/:session/video" element={<Upcoming sessionData={sessionData} />} />
        <Route path='/course' element={ <Course/>}/>
        <Route path='/minimeet' element={ <MiniMeet/>}/>

        <Route path="*" element={<Navigate to={`/${sessionData}/home`} replace />} />
      </Routes>

      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
