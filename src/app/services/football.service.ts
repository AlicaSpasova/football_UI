import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, shareReplay } from 'rxjs';
import { LeaguesList, ResponseLeague } from '../models/league-response.model';
import { Country } from '../models/country.model';
import { Standing, StandingsList } from '../models/standing-response.model';
import { FixturesList, ResponseFixture } from '../models/fixture-response.model';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) { }

  getLeague(country: Country) {
    let currentLeague = true;
    let typeLeague = "League";
    let params = new HttpParams().append("name", country.league).append("country", country.name).append("current", currentLeague).append("type", typeLeague); //Create new HttpParams
		return this.http
      .get<LeaguesList>("https://v3.football.api-sports.io/leagues", {
        observe: "response",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "8136b67b6b9e31d7fb726cfcb9a72712"
        },
        params: params
      })
      .pipe(
        map((data) => {
          return data.body.response as ResponseLeague[];
        })
      );
	}
  
  getStendings(league: string, season: number) {
    let params = new HttpParams().append("league", league).append("season", season); //Create new HttpParams
		return this.http
      .get<StandingsList>("https://v3.football.api-sports.io/standings", {
        observe: "response",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "8136b67b6b9e31d7fb726cfcb9a72712"
        },
        params: params
      })
      .pipe(
        map((data) => {
          return data.body.response[0].league.standings as Standing[];
        }),
      );
	}

  getFixtures(team: number, league: number, season: number) {
    let params = new HttpParams().append("team", team).append("league", league).append("season", season).append("last", 10); //Create new HttpParams
		return this.http
      .get<FixturesList>("https://v3.football.api-sports.io/fixtures", {
        observe: "response",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "8136b67b6b9e31d7fb726cfcb9a72712"
        },
        params: params
      })
      .pipe(
        map((data) => {
          return data.body.response as ResponseFixture[];
        })
      );
	}
}
