import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './containers/summary/summary.component';
import { ProfileComponent } from './containers/profile/profile.component';


const routes: Routes = [
  {
    path: 'customers',
    component: SummaryComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        outlet: 'side'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
