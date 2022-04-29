import React from "react";
import LeaderboardEntry from "./Entry";
import { TeamState, useTeam } from "../../context/TeamContext";

const friendlyName = {
  'kahoot': 'Kahoot',
  'geoguessr': 'Geoguessr',
  'wordle': 'Wordle',
  'rps': 'Rock Paper Scissors',
  'smashbros': 'Super Smash Bros',
  'mariokart': 'Mario Kart',
  'wiiTableTennis': "Wii: Table Tennis",
  'wiiPingPong': "Wii: Ping Pong",
  'wiiBowling': "Wii: Bowling",
  'dailyChallenges': "Daily Challenges",
  'books': "Book DDD",
  'womensMMBracket': "Women's MM Bracket",
  'mensMMBracket': "Men's MM Bracket",
  'dareToCare': "Dare To Care DDD",

  relayOne: "Relay 1",
  LSHeadsTails: "LS Heads & Tails",
  tugOfWar: "Tug of War",
  balloonToss: "Faculty Balloon Toss",
  relayTwo: "Relay 2",
  limbo: "Limbo",
  bucketBrigade: "Bucket Brigade",
}

function TeamPoints() {
  const team = useTeam();

  return (
    <div className="c-card__body">
      <ul className="c-list" id="list">
        <li className="c-list__item" key="heading">
          <div className="c-list__grid">
            <div className="u-text--left u-text--small u-text--medium"></div>
            <div className="u-text--left u-text--small u-text--medium">
              Description
            </div>
            <div className="u-text--right u-text--small u-text--medium">
              Points
            </div>
          </div>
        </li>

        {
          team.state === TeamState.Loaded ? (
            Object.entries(team)
              .filter(([k]) => k in friendlyName)
              .filter(([_k, v]) => v !== null && v !== undefined)
              .map((entry, index) => <LeaderboardEntry key={entry[0]} props={{ name: friendlyName[entry[0] as keyof typeof friendlyName], points: entry[1] as string, index, codeName: entry[0] }} />)
          ) : undefined
        }
      </ul>
    </div>
  );
}

export default TeamPoints;
