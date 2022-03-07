export type LeaderboardSuccessResponse = {
    success: true;
    data: LeaderboardTeam[];
    calculatedAt: String;
}

export type LeaderboardTeam = {
    name: string;
    points: number;
}

export type LeaderboardErrorResponse = {
    success: false;
    error: string;
}

export type LeaderboardResponse = LeaderboardSuccessResponse | LeaderboardErrorResponse;