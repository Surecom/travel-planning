/**
 * Created by Andrei_Furs on 3/30/2017.
 */
import { Model } from './model';

export interface ITravelModel {
  id?: string;
  name: string;
}

export class TravelModel extends Model {

  public name: string;

  constructor(model: ITravelModel) {
    super();
    this.name = model.name;
  }

  public toModel(): ITravelModel {
    return {
      id: this.id,
      name: this.name
    };
  }
}
