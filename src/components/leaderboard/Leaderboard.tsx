import React from "react";

function LeaderboardContents() {


  return (
    <div className="c-card__body">
      <ul className="c-list" id="list">
        <li className="c-list__item">
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
      </ul>
    </div>
  );
}

export default LeaderboardContents;
