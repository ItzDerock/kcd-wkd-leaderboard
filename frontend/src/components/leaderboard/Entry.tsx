import React from "react";
import { LeaderboardEntry } from "../../context/LeaderboardContext";

type LeaderboardEntryProps = LeaderboardEntry & {
  index: number;
};

function LeaderboardEntryComponent({ props }: { props: LeaderboardEntryProps }) {
  return (
    <li className="c-list__item">
      <div className="c-list__grid">
        <div className="c-flag c-place u-bg--transparent">{props.index}</div>
        <div className="c-media">
          <img
            className="c-avatar c-media__img"
            src="${member.img}"
            alt={props.teamName}
          />
          {/* <div className="c-media__content">
            <div className="c-media__title">{props.teamName}</div>
            <a
              className="c-media__link u-text--small"
              href="${member.image}"
              target="_blank"
            >
              View Image
            </a>
          </div> */}
        </div>
        <div className="u-text--right c-kudos">
          <div className="u-mt--8">
            <strong>{props.points}</strong> ⭐️
          </div>
        </div>
      </div>
    </li>
  );
}

export default LeaderboardEntryComponent;
