import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, shareReplay } from 'rxjs';
import { LeaguesList, ResponseLeague } from '../models/league-response.model';
import { Country } from '../models/country.model';
import { Standing, StandingsList } from '../models/standing-response.model';
import { FixturesList, ResponseFixture } from '../models/fixture-response.model';
import { environment } from 'src/environments/environment';

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
      .get<LeaguesList>(`${environment.url}/leagues`, {
        observe: "response",
        headers: {
          "x-rapidapi-host": environment.xRapidapiHost,
          "x-rapidapi-key": environment.xRapidapiKey
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
      .get<StandingsList>(`${environment.url}/standings`, {
        observe: "response",
        headers: {
          "x-rapidapi-host": environment.xRapidapiHost,
          "x-rapidapi-key": environment.xRapidapiKey
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
      .get<FixturesList>(`${environment.url}/fixtures`, {
        observe: "response",
        headers: {
          "x-rapidapi-host": environment.xRapidapiHost,
          "x-rapidapi-key": environment.xRapidapiKey
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
