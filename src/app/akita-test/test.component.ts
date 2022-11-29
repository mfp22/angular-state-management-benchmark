import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faker } from '@faker-js/faker';
import { DataService } from '../data.service';
import { RowsStore } from './rows.store';

@Component({
  selector: 'app-akita-test',
  template: `
    <button (click)="add()">START</button>
    <app-akita-grid></app-akita-grid>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AkitaTestComponent {
  private rows: any[] = [];

  constructor(private rowsStore: RowsStore, private dataService: DataService) {
    this.rows = dataService.getData();
  }

  add() {
    // console.profile('Adding items');
    console.time('Adding items');
    const portions = this.dataService.rowsCount / 10;
    for (let index = 0; index < portions; index++) {
      const from = index * 10;
      const to = index * 10 + 10;
      const itemsToAdd = this.rows.slice(from, to);
      itemsToAdd.forEach((item) => {
        this.rowsStore.add(item);
      });
    }
    // console.profileEnd('Adding items');

    setTimeout(() => {
      console.timeEnd('Adding items');
      this.update();
    });
  }

  update() {
    console.time('Updating items');
    let currentItertaion = 0;

    const intervalId = setInterval(() => {
      for (
        let index = 0;
        index < this.dataService.itemsCountToUpdate;
        index++
      ) {
        const randItemIndex = Math.floor(
          Math.random() * this.dataService.rowsCount
        );
        const itemToUpdate = Math.floor(Math.random() * 10);
        const newText = faker.name.firstName();
        // console.log(`${randItemIndex} - item${itemToUpdate}: ${newText}`);

        this.rowsStore.update(randItemIndex, {
          [`item${itemToUpdate}`]: newText,
        });
      }

      if (currentItertaion >= this.dataService.iterationsCount) {
        clearInterval(intervalId);
        console.timeEnd('Updating items');
      }

      currentItertaion++;
    }, 100);
  }
}
