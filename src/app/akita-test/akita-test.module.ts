import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaGridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import { AkitaTestComponent } from './test.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AkitaGridComponent, AkitaTestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AkitaTestComponent }]),
    SharedModule,
  ],
  providers: [],
})
export class AkitaTestModule {}
