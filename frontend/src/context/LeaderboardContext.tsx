import React from "react";

export type LeaderboardEntry = {
    name: string
    points: number
}

export enum LeaderboardState {
    Loading,
    Loaded,
    Error
}

export interface LeaderboardContextInterface {
    entries: LeaderboardEntry[]
    state: LeaderboardState
}

const LeaderboardContext = React.createContext<LeaderboardContextInterface>({
    entries: [],
    state: LeaderboardState.Loading
});

export const LeaderboardProvider = LeaderboardContext.Provider;
export const useLeaderboard = () => React.useContext(LeaderboardContext);