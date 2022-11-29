import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRxGridComponent } from './grid/grid.component';
import { NgRxGridItemComponent } from './grid-item/grid-item.component';
import { RouterModule } from '@angular/router';
import { NgRxTestComponent } from './test.component';
import { StoreModule } from '@ngrx/store';
import { rowsReducer } from './rows.reducer';

@NgModule({
    declarations: [
        NgRxGridComponent,
        NgRxGridItemComponent,
        NgRxTestComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forRoot({ state: rowsReducer }),
        RouterModule.forChild([ { path: '', component: NgRxTestComponent } ]),
    ],
    providers: [],
})
export class NgRxTestModule { }
