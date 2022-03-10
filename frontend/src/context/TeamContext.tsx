import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axios";

export type TeamAPIResponse = {
    success: true;
    data: {
        name: string;
        kahoot: string;
        geoguessr: string;
        wordle: string;
        rps: string;
        smashbros: string;
        mariokart: string;
        wiiTableTennis: string;
        wiiPingPong: string;
        wiiBowling: string;
        dailyChallenges: string;
        total: string;
    }
    
    calculatedAt: string;
}

export type TeamContextInterfaceData = (TeamAPIResponse['data'] | {}) & {
    state: TeamState,
    updatedAt: Date | undefined | null
}

export enum TeamState {
    Loading,
    Loaded,
    Error
}

export type TeamContextInterface = TeamContextInterfaceData & {
    setState: React.Dispatch<React.SetStateAction<TeamContextInterfaceData>>
}

const TeamContext = React.createContext<TeamContextInterface>({
    state: TeamState.Loading,
    updatedAt: undefined,
    setState: () => {}
});

export const useTeam = () => React.useContext(TeamContext);

export function TeamProvider({ children }: ({ children: React.ReactNode})) {
    const [state, setState] = React.useState<TeamContextInterfaceData>({
        state: TeamState.Loading,
        updatedAt: undefined
    });

    const teamName = useParams()["teamName"];

    useEffect(() => {
        if(teamName === undefined) {
            setState({
                state: TeamState.Loading,
                updatedAt: undefined
            });

            return;
        }

        axiosInstance.get<TeamAPIResponse>(`/api/team/${teamName}`).then(response => {
            if(response.data.success) {
                setState({
                    ...response.data.data,
                    state: TeamState.Loaded,
                    updatedAt: new Date(response.data.calculatedAt)
                });
            } else {
                setState({
                    state: TeamState.Error,
                    updatedAt: undefined
                });
            }
        });
    }, [teamName]);
    
    return (
        <TeamContext.Provider value={{
            ...state,
            setState
        }}>
            {children}
        </TeamContext.Provider>
    )
}