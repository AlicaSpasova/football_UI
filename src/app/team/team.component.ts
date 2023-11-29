import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FootballService } from '../services/football.service';
import { Country } from '../models/country.model';

@Component({
  selector: 'pm-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['logoHome', 'nameHome', 'goalsHome', 'dash', 'goalsAway', 'nameAway', 'logoAway'];
  dataSource;
  teamId: number;
  leagueId: number;
  seasonYear: number;
  country = new Country;

  private subscriptions: {
    dataSourceSubscription?: Subscription;
    queryParams?: Subscription;
  } = {};

  constructor(
    public footballService: FootballService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscriptions.queryParams = this.activatedRoute.queryParams.subscribe((params) => {
      this.teamId = params["teamId"];
      this.leagueId = params["leagueId"];
      this.seasonYear = params["seasonYear"];
      this.country.name = params["countryName"];
      this.country.league = params["countryLeague"];
      this.loadTable();
    }); 
  }

  loadTable() {
    this.subscriptions.dataSourceSubscription = this.footballService.getFixtures(this.teamId, this.leagueId, this.seasonYear).subscribe((res) => {
      this.dataSource = res;
    })
  }

  navigateBack() {
    this.router.navigate(["/"], { queryParams: { countryName: this.country.name, countryLeague: this.country.league } });
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
