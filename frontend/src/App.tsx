import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Leaderboard';
import Team from './pages/Team';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team/:teamName" element={<Team />}/>
        </Routes>
    )
}

export default App;