import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { Dashboard } from './dashboard.component';
import { DetailFundComponent } from './detail-fund.component';

const routes: Routes = [
  {path: 'dashboard', component: Dashboard},
  {path: 'fund/:index', component: DetailFundComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
