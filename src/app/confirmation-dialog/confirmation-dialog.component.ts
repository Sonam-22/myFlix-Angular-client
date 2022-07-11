import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  /**
   * @constructor Injects the data from parent component.
   * @param data Data from the parent component
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      question: string;
    }
  ) {}

  ngOnInit(): void {}
}
