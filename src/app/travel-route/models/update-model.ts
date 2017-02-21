/**
 * Created by Andrei_Furs on 2/21/2017.
 */
export interface IUpdateModel {
  oldDate: string;
  newDate: string;
}

export class UpdateModel {
  public oldDate: string;
  public newDate: string;

  constructor(model: IUpdateModel) {
    this.oldDate = model.oldDate;
    this.newDate = model.newDate;
  }

  public toModel(): IUpdateModel {
    return {
      oldDate: this.oldDate,
      newDate: this.newDate
    };
  }
}
