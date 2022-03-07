import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LeaderboardProvider, LeaderboardState } from './context/LeaderboardContext';

ReactDOM.render(
  <React.StrictMode>
    <LeaderboardProvider value={{
      entries: [],
      state: LeaderboardState.Loading
    }}>
      <App />
    </LeaderboardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);