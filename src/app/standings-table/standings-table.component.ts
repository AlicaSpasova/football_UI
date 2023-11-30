import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Country } from '../models/country.model';
import { FootballService } from '../services/football.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'pm-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css'],
})
export class StandingsTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() country: Country;

  displayedColumns: string[] = ['position', 'logo', 'name', 'games', 'wins', 'lose', 'draw', 'difference', 'points'];
  dataSource;
  leagueId: string;
  seasonYear: number;

  private subscriptions: {
    dataSourceSubscription?: Subscription;
    queryParams?: Subscription;
  } = {};

  constructor(
    public footballService: FootballService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["country"]) {
      this.loadTable();
    }
  }

  loadTable() {
    this.subscriptions.dataSourceSubscription = this.footballService.getLeague(this.country)
    .subscribe(
      (res) => {
        if (res.errors.access === undefined) {
          this.leagueId = res.response[0].league.id;
          this.seasonYear = res.response[0].seasons[0].year;
          this.footballService.getStendings(res.response[0].league.id, res.response[0].seasons[0].year).subscribe((data) => {
            this.dataSource = data[0];
          })
        } else {
          this.snackBar.open(res.errors.access);
          this.dataSource = [];
        }
    })
  }

  navigateTo(row) {
    this.router.navigate(["/team"], { queryParams: { teamId: row.team.id, leagueId: this.leagueId, seasonYear: this.seasonYear, countryName: this.country.name, countryLeague: this.country.league} });
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.dataSourceSubscription){
      this.subscriptions.dataSourceSubscription.unsubscribe();
    }
    if (this.subscriptions && this.subscriptions.queryParams){
      this.subscriptions.queryParams.unsubscribe();
    }
  }
}
