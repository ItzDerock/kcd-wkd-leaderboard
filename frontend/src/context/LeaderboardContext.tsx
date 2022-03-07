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
    state: LeaderboardState,
    updatedAt: Date | undefined | null
}

const LeaderboardContext = React.createContext<LeaderboardContextInterface>({
    entries: [],
    state: LeaderboardState.Loading,
    updatedAt: undefined
});

export const LeaderboardProvider = LeaderboardContext.Provider;
export const useLeaderboard = () => React.useContext(LeaderboardContext);