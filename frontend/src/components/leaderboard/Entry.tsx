import React from "react";
import { Link } from "react-router-dom";
import { LeaderboardEntry } from "../../context/LeaderboardContext";

type LeaderboardEntryProps = LeaderboardEntry & {
  index: number;
};

function LeaderboardEntryComponent({ props }: { props: LeaderboardEntryProps }) {
  const extrasPlace = props.index === 1 ? 'u-text--dark u-bg--yellow'
    : props.index === 2 ? 'u-text--dark u-bg--teal'
    : props.index === 3 ? 'u-text--dark u-bg--orange'
    : '';

  const extrasCudos = props.index === 1 ? 'u-text--yellow'
    : props.index === 2 ? 'u-text--teal'
    : props.index === 3 ? 'u-text--orange'
    : '';

  return (
    <li className="c-list__item" key={props.index}>
      <div className="c-list__grid">
        <div className={"c-flag c-place u-bg--transparent " + extrasPlace}>{props.index}</div>
        <div className="c-media">
          <img
            className="c-avatar c-media__img"
            src={require('../../assets/img/' + props.name.replace(/\s/g, '') + '.jpg')}
            alt={props.name}
          />
          <div className="c-media__content">
            <div className="c-media__title">{props.name}</div>
            <Link to={`/team/${props.name}`} className="c-media__link u-text--small">
              View Points Breakdown
            </Link>
          </div>
        </div>
        <div className={"u-text--right c-kudos " + extrasCudos}>
          <div className="u-mt--8">
            <strong>{props.points}</strong> <i className="fa-solid fa-star" />
          </div>
        </div>
      </div>
    </li>
  );
}

export default LeaderboardEntryComponent;
