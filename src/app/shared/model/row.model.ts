import { faker } from '@faker-js/faker';
import { rowsCount } from '../utils/data.util';

export type Row = {
  id: number;
  item0: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
  item8: string;
  item9: string;
};

export type RowUpdate = {
  randItemIndex: number;
  column: number;
  value: string;
};
