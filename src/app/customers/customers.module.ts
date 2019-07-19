import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { SummaryComponent } from './containers/summary/summary.component';
import { ProfileComponent } from './containers/profile/profile.component';


@NgModule({
  declarations: [SummaryComponent, ProfileComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
