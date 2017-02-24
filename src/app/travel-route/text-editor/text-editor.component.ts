import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[text-editor]',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  @ViewChild('editor')
  private editor: ElementRef;

  @Input()
  public title: string;

  @Input()
  public text: string;

  @Output()
  private onChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const editor = new MediumEditor(this.editor.nativeElement, {
      buttonLabels: 'fontawesome',
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'strikethrough',
          'anchor',
          'h1', 'h2', 'h3',
          'quote', 'orderedlist', 'unorderedlist']
      },
      paste: {
        cleanPastedHTML: true
      },
      disableExtraSpaces: true,
      placeholder: !this.text || this.text.length === 0 ? {
        text: 'Optional parameter'
      } : false
    });
    editor.subscribe('editableInput', (event, editable) => {
      this.onChange.emit(editable.innerHTML);
    });
  }

}
