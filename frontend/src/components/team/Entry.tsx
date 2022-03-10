import React from "react";

export type TeamEntryProps = {
  name: string,
  points: string
  index: number
  codeName: string
}

function LeaderboardEntryComponent({ props }: { props: TeamEntryProps }) {
  const extrasCudos = props.points === '' ? 'text-muted' 
    : parseInt(props.points) >= 30 ? 'u-text--yellow'
    : parseInt(props.points) >= 15 ? 'u-text--teal'
    : parseInt(props.points) >= 0 ? 'u-text--orange'
    : '';

  return (
    <li className="c-list__item" key={props.name}>
      <div className="c-list__grid">
        <div className="c-flag c-place u-bg--transparent">{props.index + 1}</div>
        <div className="c-media">
          <img
            className="c-avatar c-media__img"
            src={
              require('../../assets/games/' + props.codeName.replace(/\s/g, '') + '.png')
            }
            alt={props.name}
          />
          <div className="c-media__content">
            <div className="c-media__title">{props.name}</div>
            {/* <a
              className="c-media__link u-text--small"
              href="${member.image}"
              target="_blank"
            >
              View Image
            </a> */}
          </div>
        </div>
        <div className={"u-text--right c-kudos " + extrasCudos}>
          <div className="u-mt--8">
            <strong>{props.points === '' ? '0' : props.points}</strong> <i className="fa-solid fa-star" />
          </div>
        </div>
      </div>
    </li>
  );
}

export default LeaderboardEntryComponent;