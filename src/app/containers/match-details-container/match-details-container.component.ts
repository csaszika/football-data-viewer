import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-details-container',
  templateUrl: './match-details-container.component.html',
  styleUrls: ['./match-details-container.component.scss'],
})
export class MatchDetailsContainerComponent implements OnInit {
  // (competition name, teams, score, status, date, match clock, first or second half).
  constructor() {
    console.log('details');
  }

  ngOnInit() {}
}
