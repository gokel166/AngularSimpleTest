import { Component, OnInit } from '@angular/core';

import { Club } from './club';

import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clubs: Club;
  constructor(private localStorageService: LocalStorageService) { }

  getClubber(club: Club) {
    console.log(this.clubs);
    return club.name;
  }
}
