import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';
import { LocalStorageService } from '../local-storage.service';
import { Club } from '../club';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  club: Club[];
  loaded: boolean = false;
  data: any;

  constructor(private clubService: ClubsService) { }

  ngOnInit() {
  }

}
