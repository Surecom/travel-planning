/**
 * Created by Andrei_Furs on 3/1/2017.
 */
interface ITransferCheck {
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  message?: string;
}

export class TransferCheck {
  public success: boolean;
  public warning: boolean;
  public danger: boolean;
  public message: string;

  constructor(data: ITransferCheck = {}) {
    this.success = data.success || false;
    this.warning = data.warning || false;
    this.danger = data.danger  || false;
    this.message = data.message || '';
  }
}
