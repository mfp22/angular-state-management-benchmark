import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRxGridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import { NgRxTestComponent } from './test.component';
import { StoreModule } from '@ngrx/store';
import { rowsReducer } from './rows.reducer';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NgRxGridComponent, NgRxTestComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ state: rowsReducer }),
    RouterModule.forChild([{ path: '', component: NgRxTestComponent }]),
    SharedModule,
  ],
  providers: [],
})
export class NgRxTestModule {}
