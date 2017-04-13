/**
 * Created by Surecom-npm on 2/19/2017.
 */
import { DBSchema } from '@ngrx/db';

export const schema: DBSchema = {
  version: 8,
  name: 'travel-planning',
  stores: {
    cities: {
      autoIncrement: true,
      primaryKey: 'id'
    },
    transfers: {
      autoIncrement: true,
      primaryKey: 'id'
    },
    travels: {
      autoIncrement: true,
      primaryKey: 'id'
    }
  }
};
