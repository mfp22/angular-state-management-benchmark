import { Row, RowUpdate } from '../model/row.model';
import { faker } from '@faker-js/faker';

export const rowsCount = 200;
export const itemsCountToUpdate = 20;
export const iterationsCount = 1000;
const generateDateRow = (index: number): Row => ({
  id: index,
  item0: faker.date.future().toDateString(),
  item1: faker.date.future().toDateString(),
  item2: faker.date.future().toDateString(),
  item3: faker.date.future().toDateString(),
  item4: faker.date.future().toDateString(),
  item5: faker.date.future().toDateString(),
  item6: faker.date.future().toDateString(),
  item7: faker.date.future().toDateString(),
  item8: faker.date.future().toDateString(),
  item9: faker.date.future().toDateString(),
});

const generateUpdateRow = (): RowUpdate => ({
  randItemIndex: Math.floor(Math.random() * rowsCount),
  column: Math.floor(Math.random() * 10),
  value: faker.name.firstName(),
});

export const generateData = () => {
  return Array.from({ length: rowsCount }, (_, i) => generateDateRow(i));
};

export const generateUpdateChunk = () => {
  return Array.from({ length: itemsCountToUpdate }, () => generateUpdateRow());
};
