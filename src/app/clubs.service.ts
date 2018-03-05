import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { of } from 'rxjs/observable/of';

import { Club } from './club';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ClubsService {
  clubsUrl: string = 'http://localhost:4200/assets/colors.json';
  data: Observable<any>;
  constructor(private http: HttpClient) { }
  club: Club;

}
