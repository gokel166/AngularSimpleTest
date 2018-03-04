import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { of } from 'rxjs/observable/of';

import { Club } from './club';

@Injectable()
export class ClubsService {
  clubs: Club[];
  clubsUrl: string = 'http://localhost:4200/assets/colors.json';
  data: Observable<any>;
  constructor(private http: HttpClient) {
    this.clubs = [
      {
        id: 5,
        name: 'Teal'
      }
    ];
  }

  getClubs(): Club[] {
    console.log('Fetching clubs from service...');
    return this.clubs;
  }

  addUser(club: Club) {
    this.clubs.unshift(club);
  }
}
