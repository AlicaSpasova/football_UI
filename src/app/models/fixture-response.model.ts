import { League } from "./league-response.model";

export interface FixturesList {
    errors: {
        access: string
    }
    response: ResponseFixture[]
};

export interface ResponseFixture {
    fixture: Fixture;
    league: League;
    teams: {
        home: Team,
        away: Team
    }
    goals: {
        home: number;
        away: number;
    }
}

export interface Fixture {
    id: number;
    referee: string;
    timezone: string;
    date: Date;
    timestamp: number;
    city: string;
    capacity: number;
    surface: string;
    image: string;
}

export interface Team {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
}

