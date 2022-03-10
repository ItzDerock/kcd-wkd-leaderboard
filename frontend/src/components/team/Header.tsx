import React from "react";
import { Link, useParams } from "react-router-dom";
import { TeamState, useTeam } from "../../context/TeamContext";

function TeamHeader() {
  const team = useTeam();
  const params = useParams();

  return (
    <div className="c-card__header">
      <span>
        <h3>{ Math.random() > 0.5 ? '📈' : '📉'} Team Breakdown: { params['teamName'] }</h3> 
        <p className="text-muted my-auto">{
          team.state === TeamState.Loading ? "Loading..." : `Last updated ${team.updatedAt?.toLocaleString()}`
        }</p>
      </span>
      <div>
        <Link to="/" className="c-back">
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default TeamHeader;