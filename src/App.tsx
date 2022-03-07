import React from "react";
import LeaderboardHeader from "./components/leaderboard/Header";
import LeaderboardContents from "./components/leaderboard/Leaderboard";
import { useLeaderboard } from "./context/LeaderboardContext";

function App() {
  const { state } = useLeaderboard();

  return (
    <div className="l-wrapper">
      <div className="c-header">
        <h1>KCD Wild Kingdom Day</h1>
      </div>
      <div className="l-grid__item">
        <div className="c-card">
          <LeaderboardHeader />
          <LeaderboardContents />
        </div>
      </div>
    </div>
  );
}

export default App;
