import { League } from "./league-response.model";

export interface StandingsList {
    errors: {
        access: string
    }
    response: ResponseStanding[]
}

export interface ResponseStanding {
    league: League
}

export interface Standing {
    rank: number;
    team: Team[];
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: Game[];
    home: Game[];
    away: Game[];
}

export interface Team {
    id: number;
    name: string;
    logo: string;
}

export interface Game {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: Goal[];
}

export interface Goal {
    for: number;
    against: number;
}