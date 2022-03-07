import React from "react";

function LeaderboardHeader() {
  return (
    <div className="c-card__header">
      <h3>Top Teams</h3>
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