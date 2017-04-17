import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { AES, enc } from 'crypto-js';
import { CityModel } from '../models/city.model';
import { Store } from '@ngrx/store';

import { TransferModel } from '../models/transfer.model';
import { importTravel } from '../actions/travel.actions';
import { FileReaderEvent } from '../types';

@Component({
  selector: '[import-modal]',
  templateUrl: './import-modal.component.html',
  styleUrls: ['./import-modal.component.scss']
})
export class ImportModalComponent implements OnInit {

  constructor(private dialogRef: MdDialogRef<ImportModalComponent>,
              private store: Store<CityModel | TransferModel>) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  uploadFile(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (evt: FileReaderEvent) => {
        const importArr = AES.decrypt(evt.target.result, this.dialogRef._containerInstance.dialogConfig.data).toString(enc.Utf8);
        const dump = JSON.parse(importArr);
        this.store.dispatch(importTravel(dump));
      };
      reader.onerror = (evt) => {
        console.log('error reading file');
      };
    }
    this.dialogRef.close();
  }
}
