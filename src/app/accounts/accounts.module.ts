import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ListComponent } from './containers/list/list.component';
import { DetailsComponent } from './containers/details/details.component';
import { TransactionsComponent } from './containers/transactions/transactions.component';
import { TransactionsDetailsComponent } from './containers/transactions-details/transactions-details.component';


@NgModule({
  declarations: [ListComponent, DetailsComponent, TransactionsComponent, TransactionsDetailsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
