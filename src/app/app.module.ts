import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { defaultStoreProvider } from '@state-adapt/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'akita-test',
        loadChildren: () =>
          import('./akita-test/akita-test.module').then(
            (m) => m.AkitaTestModule
          ),
      },
      {
        path: 'elf-test',
        loadChildren: () =>
          import('./elf-test/elf-test.module').then((m) => m.ElfTestModule),
      },
      {
        path: 'ngrx-test',
        loadChildren: () =>
          import('./ngrx-test/ngrx-test.module').then((m) => m.NgRxTestModule),
      },
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
        path: 'state-adapt-test',
        loadChildren: () =>
          import('./state-adapt-test/state-adapt-test.module').then(
            (m) => m.StateAdaptTestModule
          ),
      },
    ]),
  ],
  providers: [defaultStoreProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
