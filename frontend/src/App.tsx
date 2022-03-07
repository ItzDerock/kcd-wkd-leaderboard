import React, { useEffect } from "react";
import LeaderboardHeader from "./components/leaderboard/Header";
import LeaderboardContents from "./components/leaderboard/Leaderboard";
import axios from "./api/axios";
import { LeaderboardResponse } from "./api/types";
import { LeaderboardProvider, LeaderboardState, LeaderboardContextInterface } from "./context/LeaderboardContext";

function App() {
  const [leaderboard, setLeaderboard] = React.useState<LeaderboardContextInterface>({
    entries: [],
    state: LeaderboardState.Loading
  });

  useEffect(() => {
    axios.get<LeaderboardResponse>('/api/leaderboard').then(response => {
      if (response.data.success) {
        setLeaderboard({
          entries: response.data.data,
          state: LeaderboardState.Loaded
        });
      }
    });
  }, []);

  return (
    <LeaderboardProvider value={leaderboard}>
      <div className="l-wrapper">
        <div className="c-header">
          <h1>KCD Wild Kingdom Day - Leaderboard</h1>
        </div>
        <div className="l-grid__item">
          <div className="c-card">
            <LeaderboardHeader />
            <LeaderboardContents />
          </div>
        </div>
        <footer>
          <p className="text-center text-muted">
            Developed by <a href="https://github.com/ItzDerock">Derock</a> 
            {" "}- Template from <a href="https://codepen.io/ryanparag/pen/ZEGLqGW">Codepen</a> 
            {" "}- <i className="fa-solid fa-code-branch" /> View on <a href="https://github.com/ItzDerock/kcd-wkd-leaderboard">Github</a>
          </p>
        </footer>
      </div>
    </LeaderboardProvider>
  );
}

export default App;
