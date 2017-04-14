import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material/dialog/dialog-ref';

@Component({
  selector: 'upload-modal',
  templateUrl: 'upload-modal.component.html',
  styleUrls: ['upload-modal.component.scss']
})
export class UploadModalComponent implements OnInit {

  constructor(private dialogRef: MdDialogRef<UploadModalComponent>) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  createAndOpenFile() {
    const fileContent = this.dialogRef.config.data;
    const pom = document.createElement('a');
    const filename = 'export.txt';
    const bb = new Blob([fileContent], {type: 'text/plain'});
    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);
    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');
    pom.click();
    this.dialogRef.close();
  }
}
