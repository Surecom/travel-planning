import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TransferModel, ITransferModel } from '../models/transfer.model';

@Component({
  selector: '[transfer-edit]',
  templateUrl: './transfer-edit.component.html',
  styleUrls: ['./transfer-edit.component.scss']
})
export class TransferEditComponent {

  @Input()
  public transfer: TransferModel;

  @Input()
  public transferUpdateForm: FormGroup;

  @Input()
  public formErrors: {};

  @Output()
  public update: EventEmitter<ITransferModel> = new EventEmitter();

  @Output()
  public cancel: EventEmitter<{}> = new EventEmitter();

  private text: string;

  updateAction() {
    this.transferUpdateForm.get('info').setValue(this.text);
    this.update.emit(this.transferUpdateForm.value);
  }

  onChangeHandler(text: string) {
    this.text = text;
  }
}
