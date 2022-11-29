import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStateGridComponent } from './grid/grid.component';
import { NgStateGridItemComponent } from './grid-item/grid-item.component';
import { RouterModule } from '@angular/router';
import { NgStateTestComponent } from './test.component';
import { StoreModule } from '@ng-state/store';
import { initialState } from './initial-state';
import { ImmutableJsDataStrategyModule } from '@ng-state/immutablejs-data-strategy';

@NgModule({
    declarations: [
        NgStateGridComponent,
        NgStateGridItemComponent,
        NgStateTestComponent
    ],
    imports: [
        CommonModule,
        StoreModule.provideStore(initialState, false),
        ImmutableJsDataStrategyModule,
        RouterModule.forChild([ { path: '', component: NgStateTestComponent } ]),
    ],
    providers: [],
})
export class NgStateTestModule { }
