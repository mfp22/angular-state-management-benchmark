import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'ng-state-immer-test', pathMatch: 'full' },
      {
        path: 'ng-state-immer-test',
        loadChildren: () =>
          import('./ng-state-immer-test/ng-state-immer-test.module').then(
            (m) => m.NgStateImmerTestModule
          ),
      },
      {
        path: 'ng-state-immutablejs-test',
        loadChildren: () =>
          import('./ng-state-immutablejs-test/ng-state-test.module').then(
            (m) => m.NgStateTestModule
          ),
      },
      {
        path: 'akita-test',
        loadChildren: () =>
          import('./akita-test/akita-test.module').then(
            (m) => m.AkitaTestModule
          ),
      },
      {
        path: 'ngrx-test',
        loadChildren: () =>
          import('./ngrx-test/ngrx-test.module').then((m) => m.NgRxTestModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
