import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Dashboard } from './dashboard.component';
import { DetailFundComponent } from './detail-fund.component';
import { AlertBoxComponent } from './alertBox.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { NGTDatePipe } from './ngt-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NGTDatePipe,
    Dashboard,
    DetailFundComponent,
    AlertBoxComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'NGT Frontend Developer Test MH')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
