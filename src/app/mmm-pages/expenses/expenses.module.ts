import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ExpensesPage } from './expenses';
import { ExpensesRoutingModule } from './expenses-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ExpensesRoutingModule,
        FormsModule
    ],
  declarations: [
    ExpensesPage,
  ]
})
export class ExpensesModule { }
