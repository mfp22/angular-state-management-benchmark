import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserTransferStateModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'ng-state-immer-test', pathMatch: 'full' },
      {
        path: 'ng-state-immer-test',
        loadChildren:
          './ng-state-immer-test/ng-state-immer-test.module#NgStateImmerTestModule',
      },
      {
        path: 'ng-state-immutablejs-test',
        loadChildren:
          './ng-state-immutablejs-test/ng-state-test.module#NgStateTestModule',
      },
      {
        path: 'akita-test',
        loadChildren: './akita-test/akita-test.module#AkitaTestModule',
      },
      {
        path: 'ngrx-test',
        loadChildren: './ngrx-test/ngrx-test.module#NgRxTestModule',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
