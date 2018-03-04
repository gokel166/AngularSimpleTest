import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { LocalStorageService } from './local-storage.service';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubsService } from './clubs.service';


@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LocalStorageService,
    ClubsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
