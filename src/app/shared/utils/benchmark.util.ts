import {
  generateData,
  generateUpdateChunk,
  iterationsCount,
  rowsCount,
} from './data.util';
import { Row, RowUpdate } from '../model/row.model';

export const benchAdd = (addFn: (rows: Row[]) => void) => {
  console.time('Adding items');

  const portions = rowsCount / 10;
  for (let index = 0; index < portions; index++) {
    const from = index * 10;
    const to = index * 10 + 10;
    const itemsToAdd = generateData().slice(from, to);
    addFn(itemsToAdd);
  }

  setTimeout(() => console.timeEnd('Adding items'));
};

export const benchUpdates = (updateFn: (updates: RowUpdate[]) => void) => {
  console.time('Updating items');

  let currentIteration = 0;
  const intervalId = setInterval(() => {
    updateFn(generateUpdateChunk());

    if (currentIteration >= iterationsCount) {
      clearInterval(intervalId);
      console.timeEnd('Updating items');
    }
    currentIteration++;
  });
};
