import React from "react";
import LeaderboardEntry from "./Entry";
import { LeaderboardState, useLeaderboard } from "../../context/LeaderboardContext";

function LeaderboardContents() {
  const leaderboard = useLeaderboard();

  return (
    <div className="c-card__body">
      <ul className="c-list" id="list">
        <li className="c-list__item" key="heading">
          <div className="c-list__grid">
            <div className="u-text--left u-text--small u-text--medium">
              Rank
            </div>
            <div className="u-text--left u-text--small u-text--medium">
              Member
            </div>
            <div className="u-text--right u-text--small u-text--medium">
              Points
            </div>
          </div>
        </li>

        {
          leaderboard.state === LeaderboardState.Loaded ? (
            leaderboard.entries.map((entry, index) => <LeaderboardEntry {...entry} index={index} />)
          ) : undefined
        }
      </ul>
    </div>
  );
}

export default LeaderboardContents;
