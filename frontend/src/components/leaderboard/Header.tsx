import React from "react";
import { LeaderboardState, useLeaderboard } from "../../context/LeaderboardContext";

function LeaderboardHeader() {
  const lb = useLeaderboard();
  return (
    <div className="c-card__header">
      <span>
        <h3>🏆 Top Teams</h3> 
        <p className="text-muted my-auto">{
          lb.state === LeaderboardState.Loading ? "Loading..." : `Last updated ${lb.updatedAt?.toLocaleString()}`
        }</p>
      </span>
      <div>
        Choose Event:
        <select className="c-select" defaultValue="WKD 2021-2022">
          <option key="2021/2">WKD 2021-2022</option>
        </select>
      </div>
    </div>
  )
}

export default LeaderboardHeader;