import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent {
  /**
   * Injects the dialog data provided by parent component.
   * @constructor
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      description: string;
      name: string;
    }
  ) {}
}
