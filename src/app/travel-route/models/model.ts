/**
 * Created by Aliaksandr_Hladchank on 22-Feb-17.
 */
export class Model {
  public id: string;

  constructor() {
    this.id = this.guid();
  }

  protected guid: () => string = (): string =>
  this.s4() + this.s4() + '-' +
  this.s4() + '-' +
  this.s4() + '-' +
  this.s4() + '-' +
  this.s4() + this.s4() + this.s4();

  private s4: () => string = (): string => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16).substring(1);
}
