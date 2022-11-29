import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaGridComponent } from './grid/grid.component';
import { AkitaGridItemComponent } from './grid-item/grid-item.component';
import { RouterModule } from '@angular/router';
import { AkitaTestComponent } from './test.component';

@NgModule({
  declarations: [
    AkitaGridComponent,
    AkitaGridItemComponent,
    AkitaTestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AkitaTestComponent }]),
  ],
  providers: [],
})
export class AkitaTestModule {}
