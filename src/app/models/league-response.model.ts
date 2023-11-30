
import { Standing } from "./standing-response.model";

export interface LeaguesList {
    errors: {
        access: string
    }
    response: ResponseLeague[]
}

export interface ResponseLeague {
    league: League,
    country: Country[],
    seasons: Seasons[]
}
  
export interface League {
    id: string;
    name: string;
    type: string;
    logo: string;
    country?: string;
    flag?: string;
    season?: number;
    standings?: Standing[]
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface Seasons {
    year: number;
    start: Date;
    end: Date;
    current: boolean;
    coverage: string;
}