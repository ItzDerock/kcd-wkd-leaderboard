import React from "react";

type LeaderboardEntry = {
    teamName: string
    points: number
}

export enum LeaderboardState {
    Loading,
    Loaded,
    Error
}

interface LeaderboardContextInterface {
    entries: LeaderboardEntry[]
    state: LeaderboardState
}

const LeaderboardContext = React.createContext<LeaderboardContextInterface>({
    entries: [],
    state: LeaderboardState.Loading
});

export const LeaderboardProvider = LeaderboardContext.Provider;
export const useLeaderboard = () => React.useContext(LeaderboardContext);