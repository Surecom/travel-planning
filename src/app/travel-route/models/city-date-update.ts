/**
 * Created by Andrei_Furs on 2/21/2017.
 */
export interface ICityDateUpdate {
  oldDate: string;
  newDate: string;
}

export class CityDateUpdate {
  public oldDate: string;
  public newDate: string;

  constructor(model: ICityDateUpdate) {
    this.oldDate = model.oldDate;
    this.newDate = model.newDate;
  }

  public toModel(): ICityDateUpdate {
    return {
      oldDate: this.oldDate,
      newDate: this.newDate
    };
  }
}
