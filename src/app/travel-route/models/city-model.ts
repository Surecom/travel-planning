/**
 * Created by Surecom-npm on 2/19/2017.
 */
export interface ICityModel {
  id?: string;
  to: Date;
  from: Date;
  title: string;
  description: string;
}

export class CityModel {
  public id: string;
  public to: Date;
  public from: Date;
  public title: string;
  public description: string;

  constructor(cityModel: ICityModel){
    this.id = this.guid();
    this.to = cityModel.to;
    this.from = cityModel.from;
    this.title = cityModel.title;
    this.description = cityModel.description;
  }

  public toModel(): ICityModel {
    return {
      id: this.id,
      to: this.to,
      from: this.from,
      title: this.title,
      description: this.description
    }
  }

  private guid: () => string = (): string =>
    this.s4() + this.s4() + '-' +
    this.s4() + '-' +
    this.s4() + '-' +
    this.s4() + '-' +
    this.s4() + this.s4() + this.s4();

  private s4: () => string = (): string => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16).substring(1);
}
